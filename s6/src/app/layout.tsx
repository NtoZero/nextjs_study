import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

async function Footer() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/book`, {
    cache: "force-cache", // 도서가 추가로 등록되지 않을 것이라 가정하고 캐싱 => 풀 라우터 캐시
  });

  if (!response.ok) {
    return <footer>제작 @ststudio</footer>;
  }

  const books: BookData[] = await response.json();
  const bookCount = books.length;

  return (
    <footer>
      <div>제작 @ststudio</div>
      <div>{bookCount}개의 도서가 등록되어 있습니다</div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
