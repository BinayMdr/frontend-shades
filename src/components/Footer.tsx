"use client";
import { useState, useEffect } from "react";
import FooterLogo from "../assets/img/footer-logo.png"
import Image from 'next/image';
import { findSettingByKey } from "@/helper/settingHelper";

export default function Footer() {
    const [showFooter, setShowFooter] = useState<boolean>(false);
    const footerImageSetting = findSettingByKey("footer-image");
    const footerHeadingSetting = findSettingByKey("footer-heading");
    const footerSloganSetting = findSettingByKey("footer-slogan");
    const footerPlaceholderSetting = findSettingByKey("footer-placeholder");
    const footerTextSetting = findSettingByKey("footer-text");

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
                            <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                                <div className="footer__widget">
                                    <h6>Category</h6>
                                    <ul>
                                        <li><a href="#">Male Category</a></li>
                                        <li><a href="#">Female Category</a></li>
                                        <li><a href="#">Child Category</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="footer__widget">
                                    <h6>Hot Trends</h6>
                                    <ul>
                                        <li><a href="#">Blue Cut</a></li>
                                        <li><a href="#">Ray Ban</a></li>
                                        <li><a href="#">Gucci</a></li>
                                    </ul>
                                </div>
                            </div>
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