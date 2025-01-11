import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  // console.log(router);
  // const q = router.query.q; // 객체의 쿼리스트링 이름 'q' 꺼내오기
  const { q } = router.query; // 구조분해할당을 통해 꺼내오기
  console.log(q);

  return <h1>search</h1>;
}
