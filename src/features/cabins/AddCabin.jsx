import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import Row from "../../ui/Row";

function AddCabin() {
      const [isOpenModal, setIsOpenModal] = useState(false);

    return (
      <Row>
        <Button onClick={() => setIsOpenModal((show) => !show)}>
          Add new cabin
        </Button>
        {isOpenModal && (
          <Modal
            onClose={() => setIsOpenModal(false)}
            setIsOpenModal={setIsOpenModal}
          >
            <CreateCabinForm setIsOpenModal={setIsOpenModal} />
          </Modal>
        )}
      </Row>
    );
}

export default AddCabin
