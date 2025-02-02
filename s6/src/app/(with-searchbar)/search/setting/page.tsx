import { delay } from "@/util/delay";

export default async function Page() {
  await delay(1500);
  return <div>setting/page</div>;
}
