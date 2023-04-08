import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { closeModal, ModalState } from '../reduxtoolkit/ModalSlice';
import CapNhatVe from '../components/Modal/CapNhatThongTinVeModal/CapNhatVe';
import ThemGoiVe from '../components/Modal/ThemGoiVeModal/ThemGoiVe';
import LocVe from '../components/Modal/LocVeModal/LocVe';
import ChangeDate from '../components/Modal/DoiNgaySuDung/ChangeDate';

interface Props {}

const components = {
  CapNhatVe:CapNhatVe,
  ThemGoiVe:ThemGoiVe,
  LocVe:LocVe,
  ChangeDate:ChangeDate
  
} as const;

export default function ModalHOC({}: Props) {
  const dispatch = useDispatch();
  const { isOpen, component, props } = useSelector((state: { modal: ModalState }) => state.modal);
// console.log({isOpen}, {component}, {props});

  const ComponentToRender = components[component];

  const handleOk = () => {
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <Modal className="w-full" visible={isOpen} onOk={handleOk} onCancel={handleCancel}>
      {<ComponentToRender {...props} />}
    </Modal>
  );
}
