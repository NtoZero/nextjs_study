import { BookData } from "@/types";

export default async function fetchOneBook(
  id: number //
  // 실패할 수 있으므로 UNION(|) 사용
): Promise<BookData | null> {
  const host = process.env.NEXT_PUBLIC_API_HOST || "";
  const url = new URL(`book/${id}`, host).toString();

  console.log(`fetchOneBook url : ${url}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}
