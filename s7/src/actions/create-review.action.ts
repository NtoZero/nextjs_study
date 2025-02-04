"use server";
import { revalidatePath } from "next/cache";

export async function createReviewAction(formData: FormData) {
  /* 서버 액션 사용*/

  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!bookId || !content || !author) {
    return;
  }

  console.log(`${process.env.NEXT_PUBLIC_API_HOST}/review`);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookId,
        content,
        author,
      }),
    });

    console.log(`response.status : ${response.status}`);
    revalidatePath(`/book/${bookId}`);
  } catch (err) {
    console.log(err);
    return;
  }
}
