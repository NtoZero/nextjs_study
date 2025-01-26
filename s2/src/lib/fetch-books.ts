import { BookData } from "@/types";
/* 비동기로 호출하고 있으므로 Promise 응답, 제네릭은 BookData의 배열*/
export default async function fetchBooks(q?: string): Promise<BookData[]> {
  const host = process.env.NEXT_PUBLIC_API_HOST || "";
  let url = new URL("/book", host).toString();

  /* search 큐를 위한 별도 로직 추가*/
  if (q) {
    url += `/search?q=${q}`;
  }

  console.log(`fetchAllBooks URL : ${url}`);

  try {
    const response = await fetch(`${url}`);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
