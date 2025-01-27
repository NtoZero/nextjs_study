import style from "./[id].module.css";
import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import fetchOneBook from "@/lib/fetch-one-book";
import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    paths: [
      // getStaticPaths 함수의 paths 프로퍼티 안에 params 배열을 지정해줘야 한다.
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
    // false : 404 Notfound
    // blocking : SSR 방식
    // true : SRR 방식 + 데이터가 없는 폴백 상태의 페이지부터 반환
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));
  console.log(id);

  return {
    props: {
      book,
    },
  };
};

export default function Page({ book }: InferGetStaticPropsType<typeof getStaticProps>) {
  // fallback이 true 일 때 props 계산 전 UI를 먼저 반환하므로, 로딩 화면을 표기해야 함.
  const router = useRouter();

  if (router.isFallback) return "로딩 중입니다.";
  if (!book) return "문제가 발생했습니다 다시 시도하세요";

  const {
    id, //
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl,
  } = book;

  return (
    <div>
      <div className={style.cover_img_container} style={{ backgroundImage: `url('${coverImgUrl}')` }}>
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>

      <div className={style.description}>{description}</div>
    </div>
  );
}
