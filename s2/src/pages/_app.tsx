import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    // router.push("/test"); // 앞으로 이동
    router.replace("/test"); // 뒤로 가기를 방지하면서 앞으로 이동
    // router.back("/test"); // 뒤로 가기
  };

  return (
    <>
      <header>
        <Link href={"/"}>index</Link> &nbsp;
        <Link href={"/search"}>search</Link> &nbsp;
        <Link href={"/book/1"}>book</Link> &nbsp;
        <div>
          <button onClick={onClickButton}>/test페이지로 이동</button>
        </div>
      </header>
      {/*공통 헤더를 입력할 수도 있음*/}
      <Component {...pageProps} />
    </>
  );
}
