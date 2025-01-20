import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { NextPage } from "next";

/*NextPage 타입과 교집합 타입 추가 */
type NextPageWithLayout = NextPage & {
  /*getLayout은 옵셔널`?`한 타입으로 선언 (book 페이지처럼 getLayout 없는 경우 방지)*/
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  /*AppProps 타입과 교집합 타입 선언*/
  Component: NextPageWithLayout;
}) {
  // console.log(Component.getLayout);
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
