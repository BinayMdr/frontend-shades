import { useState, useRef } from 'react';

const useModal = () => {
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
  };

  return { showModal, modalRef, openModal, closeModal };
};

export default useModal;
