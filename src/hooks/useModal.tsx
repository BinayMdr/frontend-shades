import { useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setPopUpModalState } from '@/store/reducers/PopUpModalReducer';

const useModal = () => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    const modalElement = modalRef.current;
    modalElement?.focus();
    setShowModal(true);
  };

  const closeModal = () => {
    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.style.display = 'none';
    }
    setShowModal(false);
    dispatch(setPopUpModalState(false));
  };

  return { showModal, modalRef, openModal, closeModal };
};

export default useModal;
