import React from 'react';
import wazza from '../assets/img/banner/banner-1.jpg'
import Image from 'next/image';

interface ModalProps {
    closeModal: () => void; 
  }

const OfferModal: React.FC<ModalProps> = ({closeModal}) => {
  return (
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body">
                <button className="close" onClick={closeModal} style={{ position: 'absolute', right: '10px', zIndex: '1000' }}>×</button>
                <Image src={wazza} alt="Modal Image" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
  );
};

export default OfferModal;
