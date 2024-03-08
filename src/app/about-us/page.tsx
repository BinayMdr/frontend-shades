"use client"
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';


import AboutUsImage from "../../assets/img/about/about-us.jpg"
import Author from "../../assets/img/about/testimonial-author.jpg"
import TestimonialPic from "../../assets/img/about/testimonial-pic.jpg"


export default function AboutUs() {
  
  return (
    <Layout>
       
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
            <div className="row">
                <div className="col-lg-12">
                    <div className="about__pic">
                        <Image src={AboutUsImage} alt=""/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="about__item">
                        <h4>Who We Are ?</h4>
                        <p>Contextual advertising programs sometimes have strict policies that need to be adhered too.
                        Let’s take Google as an example.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="about__item">
                        <h4>Who We Do ?</h4>
                        <p>In this digital generation where information can be easily obtained within seconds, business
                        cards still have retained their importance.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="about__item">
                        <h4>Why Choose Us</h4>
                        <p>A two or three storey house is the ideal way to maximise the piece of earth on which our home
                        sits, but for older or infirm people.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <section className="testimonial">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-6 p-0">
                      <div className="testimonial__text">
                          <span className="icon_quotations"></span>
                          <p>“Going out after work? Take your butane curling iron with you to the office, heat it up,
                              style your hair before you leave the office and you won’t have to make a trip back home.”
                          </p>
                          <div className="testimonial__author">
                              <div className="testimonial__author__pic">
                                  <Image src={Author} alt="" />
                              </div>
                              <div className="testimonial__author__text">
                                  <h5>Augusta Schultz</h5>
                                  <p>Fashion Design</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 p-0">
                      <div className="testimonial__pic set-bg" style={{ backgroundImage: `url(${TestimonialPic.src})` }}></div>
                  </div>
              </div>
          </div>
      </section>

    </Layout>       
  );
}
