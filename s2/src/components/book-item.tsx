import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";
export default function BookItem({
  id, //
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      {/* Link 컴포넌트가 최상위인 이유 : 북 컴포넌트 클릭시 이동*/}
      <img src={coverImgUrl} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
