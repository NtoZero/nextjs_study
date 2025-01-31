# 한입 패치노트) Next.js 15 관련 강의 업데이트 사항 안내
안녕하세요 한입 Next 수강생 여러분 이정환입니다.

2024년 10월 21일, Next.js 15 버전이 드디어 정식으로(latest) 출시 되었습니다 🎉

Next 15 관련 공식문서 링크 : https://nextjs.org/blog/next-15



우리 강의는 15 RC(15.0.0-rc.0) 버전을 기준으로 제작 되었기 때문에

현재 출시된 15 latest 버전과 큰 차이점이 있지는 않은데요

그럼에도 기존 강의 내용과 일부 달라지는 사항이 있기 때문에 이렇게 안내를 보내드립니다.


기능 변경) searchParams와 params는 이제 비동기로 제공됩니다.

2024년 10월 21일 이전에 Next 15 RC 버전으로 수강하신 수강생 여러분들께서는

searchParams와 params를 다음과 같이 동기적으로 사용하셨을 겁니다.
```javascript
// searchParams 꺼내오기
export default async function Page({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const { q } = searchParams;
  return <div>{q}</div>;
}

// params 꺼내오기
export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <div>{id}</div>;
}
```
그러나 21일에 정식 출시된 Next 15(latest) 버전 부터는 searchParams와 params가 비동기적으로 제공된다고 합니다.

따라서 이제부터는 다음과 같이 async, await을 활용해 값을 꺼내오도록 설정해야합니다.

강의에서도 해당 내용을 반영하기 위해 일부 챕터를 재 녹화하였습니다.
```javascript
// searchParams 꺼내오기
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return <div>{q}</div>;
}

// params 꺼내오기
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>{id}</div>;
}
```
여기에 더해 cookies, header 등의 브라우저로부터 받은 요청에 의존하는 데이터들은 앞으로 모두 비동기적으로 제공된다고 합니다. 
강의에서는 cookies와 header에 대해서 다루지는 않았지만 향후 개인 프로젝트를 진행하실 때에 활용하실 가능성이 높은 기능들이므로 꼭 알아두시면 좋겠습니다. 
다음은 관련 아티클 링크입니다.
https://nextjs.org/blog/next-15#async-request-apis-breaking-change

---

