/*S2-6. NEXT에서는 페이지별 클래스 이름을 원천 차단하기 위하여 CSS 충돌로 사용할 수 없음. */
// import "./index.module.css";

/* CSS Module 임포트*/
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      {/*  CSS Module 임포트하여 className 동적 생성 */}
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
