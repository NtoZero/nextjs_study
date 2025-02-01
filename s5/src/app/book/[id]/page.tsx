import style from "./page.module.css";
import { notFound } from "next/navigation";

// export const dynamicParams = false;

// generateStaticParams : App Router에서 정해진 정적 경로를 빌드 타임에 빌드하기 위함.
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({
  params,
}: {
  // ✅ Promise 객체의 제네릭으로 id 감싸기
  params: Promise<{ id: string | string[] }>;
}) {
  // ✅ params를 await하여 안전하게 처리
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/book/${id}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생하였습니다.</div>;
  }

  const book = await response.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} alt={title} />
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
