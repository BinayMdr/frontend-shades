"use client"
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';

export default function Profile() {
  
  return (
    <Layout>
       
       <section className="sigin spad">
            <div className="container">
                <div className="sigin__form">
                    <form action="#">
                            <div>
                                <h2 className="sigin__title">Profile</h2>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="sigin__input">
                                            <p>Full Name<span>*</span></p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sigin__input">
                                            <p>Email<span>*</span></p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sigin__input">
                                            <p>Phone Number</p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sigin__input">
                                            <p>Address</p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sigin__input">
                                            <p>Password</p>
                                            <input type="password" />
                                        <p className="note">Leave field empty if no changes required</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="sigin__input">
                                            <p>Confirm Password</p>
                                            <input type="password" />
                                        <p className="note">Leave field empty if no changes required</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="primary-btn">Update Profile</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </section>

    </Layout>       
  );
}
