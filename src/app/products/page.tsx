"use client"
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

import Product from "../../assets/img/product/product-1.jpg"
import Product2 from "../../assets/img/product/product-2.jpg"


export default function AboutUs() {
  
  return (
    <Layout>
       <section className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__text">
                        <h4>Products</h4>
                        <div className="breadcrumb__links">
                            <Link href="/">Home</Link>
                            <span>Products</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="shop spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="shop__sidebar">
                        <div className="shop__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search..." />
                                <button type="submit"><span className="icon_search"></span></button>
                            </form>
                        </div>
                        <div className="shop__sidebar__accordion">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__categories">
                                                <ul className="nice-scroll">
                                                    <li><a href="#">Men (20)</a></li>
                                                    <li><a href="#">Women (20)</a></li>
                                                    <li><a href="#">Kids (20)</a></li>
                                                    <li><a href="#">Polarized (20)</a></li>
                                                    <li><a href="#">Full UV Protection (20)</a></li>
                                                    <li><a href="#">Oversized (20)</a></li>
                                                    <li><a href="#">Interchangeable Lenses (20)</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseTwo">Branding</a>
                                    </div>
                                    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__brand">
                                                <ul>
                                                    <li><a href="#">Louis Vuitton</a></li>
                                                    <li><a href="#">Chanel</a></li>
                                                    <li><a href="#">Hermes</a></li>
                                                    <li><a href="#">Gucci</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseThree">Filter Price</a>
                                    </div>
                                    <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__price">
                                                <ul>
                                                    <li><a href="#">Rs. 500 - Rs. 1499</a></li>
                                                    <li><a href="#">Rs. 1500 - Rs. 2499</a></li>
                                                    <li><a href="#">Rs. 2500 - Rs. 3499</a></li>
                                                    <li><a href="#">Rs. 3500 - Rs. 4999</a></li>
                                                    <li><a href="#">Rs. 5000+</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseFour">Size</a>
                                    </div>
                                    <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__size">
                                                <label htmlFor="xs">xs
                                                    <input type="radio" id="xs"/>
                                                </label>
                                                <label htmlFor="sm">s
                                                    <input type="radio" id="sm"/>
                                                </label>
                                                <label htmlFor="md">m
                                                    <input type="radio" id="md"/>
                                                </label>
                                                <label htmlFor="xl">xl
                                                    <input type="radio" id="xl"/>
                                                </label>
                                                <label htmlFor="2xl">2xl
                                                    <input type="radio" id="2xl"/>
                                                </label>
                                                <label htmlFor="xxl">xxl
                                                    <input type="radio" id="xxl"/>
                                                </label>
                                                <label htmlFor="3xl">3xl
                                                    <input type="radio" id="3xl"/>
                                                </label>
                                                <label htmlFor="4xl">4xl
                                                    <input type="radio" id="4xl"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseFive">Colors</a>
                                    </div>
                                    <div id="collapseFive" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__color">
                                                <label className="c-1" htmlFor="sp-1">
                                                    <input type="radio" id="sp-1" />
                                                </label>
                                                <label className="c-2" htmlFor="sp-2">
                                                    <input type="radio" id="sp-2" />
                                                </label>
                                                <label className="c-3" htmlFor="sp-3">
                                                    <input type="radio" id="sp-3" />
                                                </label>
                                                <label className="c-4" htmlFor="sp-4">
                                                    <input type="radio" id="sp-4" />
                                                </label>
                                                <label className="c-5" htmlFor="sp-5">
                                                    <input type="radio" id="sp-5" />
                                                </label>
                                                <label className="c-6" htmlFor="sp-6">
                                                    <input type="radio" id="sp-6" />
                                                </label>
                                                <label className="c-7" htmlFor="sp-7">
                                                    <input type="radio" id="sp-7" />
                                                </label>
                                                <label className="c-8" htmlFor="sp-8">
                                                    <input type="radio" id="sp-8" />
                                                </label>
                                                <label className="c-9" htmlFor="sp-9">
                                                    <input type="radio" id="sp-9" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseSix">Tags</a>
                                    </div>
                                    <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__tags">
                                                <a href="#">Sunglasses</a>
                                                <a href="#">Summer</a>
                                                <a href="#">Winter</a>
                                                <a href="#">Hotest</a>
                                                <a href="#">Latest Trend</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="shop__product__option">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__left">
                                    <p>Showing 1–12 of 126 results</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__right">
                                    <p className="mr-2">Sort by Price: </p>
                                    <select className="sortSelect">
                                        <option value="">Low To High</option>
                                        <option value="">$0 - $55</option>
                                        <option value="">$55 - $100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${Product2.src})` }}>
                                   
                                </div>
                                <div className="product__item__text">
                                    <h6>Piqué Biker Jacket</h6>
                                    <a href="#" className="add-cart">+ Add To Cart</a>
                                   
                                    <h5>$67.24</h5>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item sale">
                                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${Product.src})` }}>
                                    <span className="label">Sale</span>
                                
                                </div>
                                <div className="product__item__text">
                                    <h6>Multi-pocket Chest Bag</h6>
                                    <a href="#" className="add-cart">+ Add To Cart</a>
                                   
                                    <h5>$43.48</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-7">
                                            <input type="radio" id="pc-7" />
                                        </label>
                                        <label className="active black" htmlFor="pc-8">
                                            <input type="radio" id="pc-8" />
                                        </label>
                                        <label className="grey" htmlFor="pc-9">
                                            <input type="radio" id="pc-9" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
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
