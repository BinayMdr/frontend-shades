"use client"
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';

export default function SignUp() {
  
  return (
    <Layout>
       
       <section className="sigin spad">
            <div className="container">
                <div className="sigin__form">
                    <form action="#">
                            <div>
                                <h2 className="sigin__title">Reset Password</h2>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="sigin__input">
                                            <p>Password<span>*</span></p>
                                            <input type="password" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="sigin__input">
                                            <p>Confirm Password<span>*</span></p>
                                            <input type="password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="primary-btn">Reset Password</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </section>

    </Layout>       
  );
}
