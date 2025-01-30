import ClientComponent from "@/app/component/client-component";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      book / [id] page 입니다. : {id}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
