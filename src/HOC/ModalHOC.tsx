import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

interface RootState {
  modal: {
    Component: React.ReactNode;
    isOpen: boolean;
  };
}

type Props = {};

export default function ModalHOC({}: Props) {
  const dispatch = useDispatch();

  const { isOpen,Component } = useSelector((state:any) => state.ModalReducer);


  const handleOk = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleCancel = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <Modal
      className="w-full h-56"
      visible={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {Component}
    </Modal>
  );
}