import Link from 'next/link';
import React from 'react';

interface ModalProps {
    closeModal: () => void; 
    popupData:{
      name: string;
      image: string;
      link: string;
      search_key: string;
      search_value: string;
      show_search: string;
    }
  }

const OfferModal: React.FC<ModalProps> = ({closeModal,popupData}) => {
  return (
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body">
                <button className="close" onClick={closeModal} style={{ position: 'absolute', right: '10px', zIndex: '1000' }}>×</button>
                {
                  (popupData.show_search == "1")
                    ?
                    <Link href={{ pathname: popupData.link, query: {
                      searchKey: popupData.search_key,
                      searchValue: popupData.search_value
                    } }}>
                    <img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${popupData.image}`} alt={popupData.name} style={{ width: '100%', height: 'auto' }} onClick={closeModal}/>
                  </Link>
                   :
                  <Link href={popupData.link}>
                    <img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${popupData.image}`} alt={popupData.name} style={{ width: '100%', height: 'auto' }} onClick={closeModal}/>
                  </Link>
                }
                </div>
            </div>
        </div>
  );
};

export default OfferModal;
