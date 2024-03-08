"use client"
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';

export default function ForgotPassword() {
  
  return (
    <Layout>
       
       <section className="sigin spad">
            <div className="container">
                <div className="sigin__form">
                    <form action="#">
                            <div>
                                <h2 className="sigin__title">Forgot Password</h2>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="sigin__input">
                                            <p>Email<span>*</span></p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <span className="redirect-link mb-4">
                                            Resend link after 01:10 min
                                        </span>
                                    </div>
                                </div>
                                <div className="text-center mt-2">
                                    <button className="primary-btn">Send Reset Link</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </section>

    </Layout>       
  );
}
