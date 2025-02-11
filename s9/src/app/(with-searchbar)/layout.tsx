import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 클라이언트 라우트 캐시는 새로고침 또는 탭종료 시 제거된다. */}
      {/*<div>{new Date().toLocaleString()}</div>*/}
      <Suspense fallback={<div> Loading... </div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
