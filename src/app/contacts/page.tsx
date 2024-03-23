"use client"
import React from 'react';
import useApi from '@/hooks/useApi';
import { useAppSelector } from '@/store';
import LoadingScreen from '@/components/LoadingScreen';

export default function Contact() {
  
    const { data, error, isLoading } = useApi('contact');
    const animation = useAppSelector((state) => state.splash.splashState);

  return (
    
    <>  
        { data.data ?
            (
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__text">
                                <div className="section-title">
                                    <span>Information</span>
                                    <h2>Contact Us</h2>
                                </div>
                                <ul>
                                    <li>
                                        {
                                            data['data'] && (
                                            <h4>{data['data']['country']}</h4>
                                            )
                                        }
                                        {
                                             data['data'] && (
                                                <p>{data['data']['address']}<br/>
                                                {data['data']['email']}<br/>
                                                {data['data']['number']}</p>
                                                )
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea placeholder="Message"></textarea>
                                            <button type="submit" className="site-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ) :
            (
                !animation && <LoadingScreen/>
            )
        }
    </> 
        
  );
}
