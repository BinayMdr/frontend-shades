"use client"
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import useApi from '@/hooks/useApi';

import AboutUsImage from "../../assets/img/about/about-us.jpg"
import Author from "../../assets/img/about/testimonial-author.jpg"
import TestimonialPic from "../../assets/img/about/testimonial-pic.jpg"


export default function AboutUs() {

    const { data, error, isLoading } = useApi('about-us');

  return (
    <Layout>
       
       { !isLoading && ( 
        <>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>About Us</h4>
                                <div className="breadcrumb__links">
                                    <Link href="/">Home</Link>
                                    <span>About Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="about spad">
                <div className="container">
                { data['data'] &&
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about__pic">
                                <img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${data['data']['top_banner']}`} alt="Shades with style about image"/>
                            </div>
                        </div>
                    </div>
                }
                { data['data'] &&
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                                <h4>{data['data']['heading_1']}</h4>
                                <p>{data['data']['text_1']}</p>
                            </div>
                        </div>
                
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                                <h4>{data['data']['heading_2']}</h4>
                                <p>{data['data']['text_2']}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                            <h4>{data['data']['heading_3']}</h4>
                                <p>{data['data']['text_3']}</p>
                            </div>
                        </div>
                    </div>
                }
                </div>
            </section>
            { 
                (data['data'] && data['data']['show_lower_banner'] == "1") &&
                <section className="testimonial">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 p-0">
                                <div className="testimonial__text">
                                    <span className="icon_quotations"></span>
                                    <p>“{data['data']['quote']}”
                                    </p>
                                    <div className="testimonial__author">
                                        <div className="testimonial__author__text">
                                            <h5>{data['data']['author']}</h5>
                                            <p>{data['data']['designation']}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 p-0">
                                <div className="testimonial__pic set-bg" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE_URL}${data['data']['lower_banner']})` }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
       )
        }
    </Layout>       
  );
}
