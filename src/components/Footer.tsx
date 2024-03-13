"use client";
import { useState, useEffect } from "react";
import { findSettingByKey } from "@/helper/settingHelper";
import useApi from '@/hooks/useApi';
import Link from 'next/link';

export default function Footer() {
    const [showFooter, setShowFooter] = useState<boolean>(false);
    const footerImageSetting = findSettingByKey("footer-image");
    const footerHeadingSetting = findSettingByKey("footer-heading");
    const footerSloganSetting = findSettingByKey("footer-slogan");
    const footerPlaceholderSetting = findSettingByKey("footer-placeholder");
    const footerTextSetting = findSettingByKey("footer-text");
    const { data, error, isLoading } = useApi('footer-menu');

    useEffect(() => {
        if (footerImageSetting !== null && footerHeadingSetting !== null
            && footerSloganSetting != null && footerPlaceholderSetting != null
            && footerTextSetting != null) {
            setShowFooter(true);
        }
    }, [footerImageSetting,footerHeadingSetting,footerSloganSetting,
        footerPlaceholderSetting,footerTextSetting]);

    return (
        <>
        { showFooter && (
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer__about">
                                    <div className="footer__logo">
                                        <a href="#"><img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${footerImageSetting?.value}`} alt="Shades with style logo"/></a>
                                    </div>
                                    <p>{footerSloganSetting?.value}</p>
                                </div>
                            </div>
                            {data?.data && data.data.map((item: any, index: number) => (
                                <div className={`col-lg-2 ${index === 0 ? 'offset-lg-1' : ''} col-md-3 col-sm-6`} key={index}>
                               
                                    <div className="footer__widget">
                                        <h6>{item.name}</h6>
                                        <ul>
                                            {item.sub_footer_menu.map((subItem: any, subIndex: number) => (
                                                <li key={subIndex}>
                                                    <Link href={{ pathname: subItem.link, query: {
                                                        searchKey: subItem.search_key,
                                                        searchValue: subItem.search_value
                                                    } }}>{subItem.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            
                            <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                                <div className="footer__widget">
                                    <h6>{footerHeadingSetting?.value}</h6>
                                    <div className="footer__newslatter">
                                        <p>{footerTextSetting?.value}</p>
                                        <form action="#">
                                            <input type="text" placeholder={footerPlaceholderSetting?.value} />
                                            <button type="submit"><span className="icon_mail_alt"></span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="footer__copyright__text">
                                    <p>Copyright © { new Date().getFullYear() }
                                        2020
                                        All rights reserved | This template is made with <i className="fa fa-heart-o"
                                        aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            )
        }
        </>
    );
  }