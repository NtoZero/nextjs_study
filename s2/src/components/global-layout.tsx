import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>🅱️ ONEBITE BOOKS</Link>
      </header>
      <main className={style.main}>
        {/*children 요소 받기*/}
        {children}
      </main>
      <footer className={style.footer}>제작 @ststudio</footer>
    </div>
  );
}
