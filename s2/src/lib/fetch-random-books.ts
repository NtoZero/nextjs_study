import { BookData } from "@/types";

export default async function fetchRandomBooks(): Promise<BookData[]> {
  const host = process.env.NEXT_PUBLIC_API_HOST ?? "";
  const url = new URL("/book/random", host).toString();

  console.log(`fetchRandomBooks URL : ${url}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}
