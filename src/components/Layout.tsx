"use client"
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import OfferModal from './OfferModal';
import SplashScreen from './SplashScreen';
import { useAppSelector,useAppDispatch } from '../store/index';
import { setSplashState } from '../store/reducers/SplashReducer';
import useModal from '@/hooks/useModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { showModal, modalRef, openModal, closeModal } = useModal();

  const animation = useAppSelector((state) => state.splash.splashState);
  const dispatch = useAppDispatch();
 
  // useEffect(() => {
  //   openModal()
  // }, []);
  
  const onAnimationComplete = () => {
    dispatch(setSplashState(false))
  }


  return (
      <>
          <Header />
            { showModal &&
              <div className="modal" autoFocus role="dialog" ref={modalRef} style={{ display: 'block' }}>
                <OfferModal closeModal={closeModal}/>
              </div>
            }
            { animation && <SplashScreen  onAnimationComplete={onAnimationComplete}/>}
          {children}
          <Footer />
      </>
  );
};

export default Layout;
