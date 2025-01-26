import { useRouter } from "next/router";
import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";

/* GetServerSidePropsContext : 브라우저에서 전달되는 모든 요청 정보를 포함하는 리액트 객체 */
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // console.log(context);
  const q = context.query.q;
  const books = await fetchBooks(q as string);

  return {
    props: {
      books,
    },
  };
};

export default function Page({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
