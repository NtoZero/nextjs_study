import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>공통 헤더</header> {/*공통 헤더를 입력할 수도 있음*/}
      <Component {...pageProps} />
    </>
  );
}
