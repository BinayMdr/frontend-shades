"use client"
import { useState, useEffect } from "react";
import Image from 'next/image';
import Cart from "../assets/img/icon/cart.png";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useApi from '@/hooks/useApi';
import { setSettingState } from '@/store/reducers/SettingReducer';
import { useAppSelector,useAppDispatch } from '../store/index';
import { setSplashState } from '../store/reducers/SplashReducer';
import SplashScreen from './SplashScreen';
import useModal from '@/hooks/useModal';
import OfferModal from "./OfferModal";

interface Setting {
    key: string;
    value: string;
  }
function Header() {
    const { showModal, modalRef, openModal, closeModal } = useModal();
    const [status, setStatus] = useState<"active" | "inactive">("inactive");
    const [topText,setTopText] = useState<String|null>(null);
    const [bannerImage,setBannerImage] = useState<String|null>(null);
    const popupApi = useApi('pop-up')
    const popUpModal = useAppSelector((state) => state.popUp.popUpModalState);

    const pathname = usePathname()
    const dispatch = useAppDispatch();
    const { data, error, isLoading } = useApi('settings');
    dispatch(setSettingState(data));

    useEffect(() => {
        if (data && data.data) {
            const topTextEntry = Object.entries(data.data).find(([_, value]) => value.key === "top-text");
            const bannerImageEntry = Object.entries(data.data).find(([_, value]) => value.key === "banner-image");
            
            setTopText(topTextEntry ? topTextEntry[1]['value'] : null);
            setBannerImage(bannerImageEntry ? bannerImageEntry[1]['value'] : null);
        }
    }, [data]); 

    const updateSideBar = () => {
        setStatus('inactive')
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const closeMenuOnOutsideClick = (event: MouseEvent) => {
                const offcanvasMenu = document.querySelector('.offcanvas-menu-wrapper');
                const openNav = document.querySelector('.canvas__open') as HTMLElement;

                if (openNav.contains(event.target as Node)) {
                setStatus("active");
                } else if (offcanvasMenu && !offcanvasMenu.contains(event.target as Node)) {
                setStatus("inactive");
                }
            };

            document.addEventListener('click', closeMenuOnOutsideClick);

            return () => {
                document.removeEventListener('click', closeMenuOnOutsideClick);
            };
        }  
    }, []);

    const animation = useAppSelector((state) => state.splash.splashState);
    const onAnimationComplete = () => {
        dispatch(setSplashState(false))
      }

    return (
        <>{ !animation ? ((topText && bannerImage) &&(
            <>
            <div className={`offcanvas-menu-overlay ${status}`}></div>
            <div className={`offcanvas-menu-wrapper ${status}`}>
                <div className="offcanvas__option">
                    <div className="offcanvas__links">
                        <Link href="/sign-in" key="sign-in">Sign in</Link>
                    </div>
                    <div className="offcanvas__links">
                        <Link href="/sign-up" key="sign-up">Sign up</Link>
                    </div>
                    <div className="offcanvas__links">
                        <Link href="/sign-up" key="sign-up">Logout</Link>
                    </div>
                </div>
                <div className="offcanvas__nav__option">
                    <Link href="cart"><Image src={Cart} alt=""/></Link>
                </div>
                <div id="mobile-menu-wrap">
                    <div className="slicknav_menu">
                        <a href="#" aria-haspopup="true" role="button" tabIndex={0}className="slicknav_btn slicknav_collapsed" style={{outline: 'none'}}>
                                <span className="slicknav_menutxt">MENU</span>
                                    <span className="slicknav_icon"><span className="slicknav_icon-bar"></span>
                                    <span className="slicknav_icon-bar"></span>
                                    <span className="slicknav_icon-bar"></span></span></a>
                                <nav className="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style={{display: 'none'}}>
                                    <ul>
                                        <li><Link href="/" role="menuitem" onClick={updateSideBar}>Home</Link></li>
                                        <li><Link href="about-us" role="menuitem" onClick={updateSideBar}>About Us</Link></li>
                                        <li><Link href="products" role="menuitem" onClick={updateSideBar}>Products</Link></li>
                                        <li><Link href="profile" role="menuitem" onClick={updateSideBar}>Profile</Link></li>
                                        <li><Link href="profile/past-order" role="menuitem" onClick={updateSideBar}>Past Orders</Link></li>
                                        <li><Link href="contacts" role="menuitem" onClick={updateSideBar}>Contacts</Link></li>
                                    </ul>
                                </nav>
                    </div>
                </div>
                <div className="offcanvas__text">
                    <p>{topText}</p>
                </div>
            </div>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="header__top__left">
                                    <p>{topText}</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="header__top__right">
                                    <div className="header__top__links">
                                        <Link href="/sign-in">Sign in</Link>
                                    </div>
                                    <div className="header__top__links">
                                        <Link href="/sign-up">Sign up</Link>
                                    </div>
                                    <div className="header__top__links">
                                        <Link href="/logout">Logout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <div className="header__logo">
                                <Link href="/"><Image layout="fill" src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${bannerImage}`} alt="Shades with style logo"/></Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className={(pathname == "/") ? 'active' : ''}><Link href="/">Home</Link></li>
                                    <li className={(pathname == "/about-us") ? 'active' : ''}><Link href="/about-us" >About Us</Link></li>
                                    <li className={(pathname.includes('products')) ? 'active' : ''}><Link href="/products">Products</Link></li>
                                    <li className={(pathname == "/profile") ? 'active' : ''}><Link href="/profile">Profile</Link></li>
                                    <li className={(pathname == "/profile/past-order") ? 'active' : ''}><Link href="/profile/past-order">Past Orders</Link></li>
                                    <li className={(pathname == "/contact-us") ? 'active' : ''}><Link href="/contacts">Contacts</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-1 col-md-1">
                            <div className="header__nav__option">
                                <Link href="/cart"><Image src={Cart} alt=""/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open"><i className="fa fa-bars" onClick={(e) => setStatus('active')}></i></div>
                </div>
                {
                    ( (pathname == "/") && popUpModal && popupApi.data.data && popupApi.data.data != null)
                    &&
                    <div className="modal" autoFocus role="dialog" ref={modalRef} style={{ display: 'block' }}>
                        <OfferModal closeModal={closeModal} popupData={popupApi.data.data}/>
                    </div>
                } 
            </header>
            </>
            )): (<SplashScreen onAnimationComplete={onAnimationComplete}/>)
           }
        </>
    );
}

export default Header
