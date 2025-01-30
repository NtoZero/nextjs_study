import { ReactNode } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <Link href={"/"}>index</Link> &nbsp;
        <Link href={"/search"}>search</Link> &nbsp;
        <Link href={"/book/1"}>book/1</Link> &nbsp;
      </header>
      {children}
    </div>
  );
}
