/*S2-6. NEXT에서는 페이지별 클래스 이름을 원천 차단하기 위하여 CSS 충돌로 사용할 수 없음. */
// import "./index.module.css";

/* CSS Module 임포트*/
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";

/* 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수 */
export const getServerSideProps = () => {
  const data = "hello";

  // console.log("서버사이드프롭스예요"); // 서버에서만 동작. 브라우저에서 확인 불가.
  // console.log(window);

  /*
  주의 사항:
  1. 단 하나의 객체를 반환해야 한다.
  2. 객체 내부에 props라는 이름의 프로퍼티를 가지고 있어야 한다.
  */
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);

  useEffect(() => {
    /*useEffect를 사용하면 브라우저에 컴포넌트 마운트 이후에만 사용 */
    console.log(window);
  }, []);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
