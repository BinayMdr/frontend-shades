"use client"
import React,{useRef,useEffect,useState} from 'react';
import Layout from '../../../components/Layout';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import useModal from '@/hooks/useModal';

export default function PastOrder() {
    const { showModal, modalRef, openModal, closeModal } = useModal();    

    return (
        <Layout>
            {  showModal &&
                <div className="modal" autoFocus role="dialog" ref={modalRef} style={{ display: 'block' }}>
                    <Modal closeModal={closeModal}/>
                </div>
            }


            <section className="shopping-cart spad">
                <div className="container">
                    <div className="past__order__search col-lg-4 col-md-4 col-sm-6">
                        <form action="#">
                            <input placeholder="Search..." type="text"/>
                            <button type="submit"><span className="icon_search"></span>
                            </button>
                            </form>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Status</th>
                                            <th>Ordered Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td >SWS0010</td>
                                            <td >Completed</td>
                                        
                                            <td >Rs. 30.00</td>
                                            <td><FontAwesomeIcon icon={faEye} onClick={openModal}/></td>
                                        </tr>
                                        <tr>
                                            <td >SWS0100</td>
                                            <td >Pending</td>
                                            <td >Rs. 300000</td>
                                            <td><FontAwesomeIcon icon={faEye} onClick={openModal}/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="product__pagination">
                                        <a className="active" href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <span>...</span>
                                        <a href="#">21</a>
                                    </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>       
    );
}
