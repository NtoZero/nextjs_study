import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    // router.push("/test"); // 앞으로 이동
    router.replace("/test"); // 뒤로 가기를 방지하면서 앞으로 이동
    // router.back("/test"); // 뒤로 가기
  };

  /* test 페이지는 동적 네비게이팅이므로 프리페칭이 되지 않는다.
   * 해결 방법은 다음과 같다.
   * => _app.tsx가 렌더링 될 때 pre-fetching 하도록 동적으로 설계한다.
   * */
  useEffect(() => {
    router.prefetch("/test");
  }, []);

  return (
    <>
      <header>
        <Link href={"/"}>index</Link> &nbsp;
        {/*링크 컴포넌트 search에 대한 강제 prefetching 해제*/}
        <Link href={"/search"} prefetch={false}>
          search
        </Link>{" "}
        &nbsp;
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
