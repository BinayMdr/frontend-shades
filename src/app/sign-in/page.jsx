"use client"
import React from 'react';
import Layout from '../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';

export default function SignIn() {
  
  return (
    <Layout>
       
       <section className="sigin spad">
            <div className="container">
                <div className="sigin__form">
                    <form action="#">
                            <div>
                                <h2 className="sigin__title">Sign In</h2>
                                <div className="row">
                                    <div className="col-lg-12">

                                        <div className="sigin__input">
                                            <p>Email<span>*</span></p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="sigin__input">
                                            <p>Password<span>*</span></p>
                                            <input type="password" />
                                        </div>
                                    </div>
                                </div>
                               
                                <span className="redirect-span mb-4">
                                    <Link href="/forgot-password">Forgot Password?</Link>
                                </span>
                                <div className="text-center">
                                    <button className="primary-btn">Submit</button>
                                </div>
                                <div className="text-center my-2">
                                    <span >Or</span>
                                </div>
                                <div className="text-center">
                                    <span className="gogole-signin">
                                        Sign in with <FontAwesomeIcon icon={faGoogle} />
                                    </span>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </section>

    </Layout>       
  );
}
