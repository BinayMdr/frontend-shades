"use client"
import React,{useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import OfferModal from './OfferModal';
import SplashScreen from './SplashScreen';
import { useAppSelector,useAppDispatch } from '../store/index';
import { setSplashState } from '../store/reducers/SplashReducer';
import useModal from '@/hooks/useModal';
import useApi from '@/hooks/useApi';
import { setSettingState } from '@/store/reducers/SettingReducer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { showModal, modalRef, openModal, closeModal } = useModal();

  const animation = useAppSelector((state) => state.splash.splashState);
  const dispatch = useAppDispatch();
  
  const setting = useAppSelector((state) => state.setting.settingState);

  // useEffect(() => {
  //   openModal()
  // }, []);
  

  const { data, error, isLoading } = useApi('settings');
  dispatch(setSettingState(data));
  

  const onAnimationComplete = () => {
    dispatch(setSplashState(false))
  }

  return (
    <>
      {!isLoading && (
        <>
          <Header />
            {showModal && !animation && (
              <div className="modal" autoFocus role="dialog" ref={modalRef} style={{ display: 'block' }}>
                <OfferModal closeModal={closeModal}/>
              </div>
            )}
          {animation && <SplashScreen onAnimationComplete={onAnimationComplete}/>}
          {!animation && children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
