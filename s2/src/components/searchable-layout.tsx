import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({ children }: { children: ReactNode }) {
  const router = useRouter(); /* 버튼을 눌렀을 때 프로그래머틱한 이동을 위해 useRouter 사용 */
  const [search, setSearch] = useState("");

  const q = router.query.q as string; /* q는 string 배열, string, undefined로 다양하게 추론될 수 있으므로, 타입 단언. */

  /* 쿼리스트링이 존재하는 상태에서 새로 고침을 눌렀을 때 input 태그 값이 동기화 되도록 */
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  /*React.ChangeEvent<HTMLInputElement> 타입은 React에서 발생한 변경 이벤트*/
  /*
  * React.ChangeEvent: React에서 <input>, <textarea>, <select> 등 폼 요소에서 발생하는 이벤트 타입.
    HTMLInputElement: 이벤트가 발생한 대상 DOM 요소의 타입을 명시 => e.target.value가 문자열(string)임을 TypeScript가 추론
  */
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} placeholder="검색어를 입력하세요..." />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
