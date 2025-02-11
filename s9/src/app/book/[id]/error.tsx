"use client";

import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function onClickErrorRefresh({
  router,
  reset,
}: {
  router: AppRouterInstance;
  reset: () => void;
}) {
  /* 함수 하나를 인수로 받아서, 해당 함수 내부의 코드를 동기적으로 실행 */
  startTransition(() => {
    router.refresh(); // 현재 페이지에 필요한 서버컴포넌트들 다시 불러옴.
    reset(); // 에러 상태를 초기화, 컴포넌트들을 다시 렌더링
  });
}

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  /* 에러 상태의 변화가 있을 때 출력 */
  useEffect(() => {
    console.log(error.message);
  }, [error]);

  return (
    <div>
      <h3> 오류가 발생했습니다.</h3>
      <button onClick={() => onClickErrorRefresh({ router, reset })}>
        다시 시도
      </button>
    </div>
  );
}
