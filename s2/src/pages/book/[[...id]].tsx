import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  console.log(router); // router 객체의 id에 url 파라미터가 저장됨을 확인할 수 있음.

  const { id } = router.query;
  console.log(id);

  return (
    <>
      <h1>Book {id}</h1>
    </>
  );
}
