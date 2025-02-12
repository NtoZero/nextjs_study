import BookPage from "@/app/book/[id]/page";
import Modal from "@/components/modal";

export default function Page<T extends { params: Promise<{ id: string }> }>(
  props: T
) {
  return (
    <div>
      <Modal>
        <BookPage {...props} />
      </Modal>
    </div>
  );
}
