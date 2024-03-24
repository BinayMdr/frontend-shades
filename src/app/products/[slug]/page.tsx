"use client"
import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';
import Image from 'next/image';
import Link from 'next/link';

import ProductBig from '../../../assets/img/shop-details/product-big.png'
import ProductBig3 from '../../../assets/img/shop-details/product-big-3.png'
import ProductBig4 from '../../../assets/img/shop-details/product-big-4.png'

import Product2 from "../../../assets/img/product/product-2.jpg"
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';

export default function ProductDetail() {
    const pathname = usePathname()
    const slug = pathname.replace("/products/","");
    const { data, error, isLoading } = useApi(`product-detail/${slug}`);
    const [descriptionTab,setDescriptionTab] = useState(0);
    const [imageTab,setImageTab] = useState(0);
    
    const router = useRouter();

    if(data.data === null) {
        router.push('/not-found-404')
    }

    if(data.data && data.data != null)
    {
        if((data.data.description != null && data.data.description != '') || (
            data.data.additional_information != null && data.data.additional_information != ''))
            {
                if(data.data.description == null || data.data.description == '') setDescriptionTab(1)
            }
    }
    
    return (
    <>
    { data.data &&
       <section className="shop-details">
        <div className="product__details__pic">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__breadcrumb">
                            <Link href="/">Home</Link>
                            <Link href="/products">Products</Link>
                            <span>Product Details</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <ul className="nav nav-tabs" role="tablist">

                            {
                                data.data.images.split(',').map((item: any, index: any) => (
                                    <li className="nav-item" key={index}>
                                        <a className="nav-link active" data-toggle="tab"  role="tab" onClick={() => setImageTab(index)}>
                                            <div className="product__thumb__pic set-bg" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE_URL}${item})` }}>
                                            </div>
                                        </a>
                                    </li>
                            ))}
                            
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-9">
                        <div className="tab-content">
                            {data.data.images.split(',').map((item: any, index: any) => (
                                <div className={`tab-pane ${imageTab == index ? 'active' : ''}`} role="tabpanel" key={index}>
                                    <div className="product__details__pic__item">
                                        <img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${item}`} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product__details__content">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="product__details__text">
                            <h4>{data.data.name}</h4>
                            <h3>
                            { (data.data.sale_price != null && 
                                    data.data.sale_price !== "") ? (
                                        <>
                                            Rs.{data.data.sale_price} 
                                            <span>{data?.data.price}</span>
                                        </>
                                    ) : 
                                    (data.data.discounted_price != null && 
                                        data.data.discounted_price !== "")
                                    ?
                                    (
                                        <>
                                        Rs.{data.data.discounted_price} 
                                        <span>{data?.data.price}</span>
                                    </>
                                    ):
                                    (
                                        <>Rs.{data.data.price}</>
                                    )
                            }
                            </h3>
                            <p>{data.data.short_discription}</p>
                            <div className="product__details__cart__option">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="number" value="1" onChange={(e) => console.log(e)}/>
                                    </div>
                                </div>
                                <a href="#" className="primary-btn">add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                { ( (data.data.description != null && data.data.description != '') || (
                    data.data.additional_information != null && data.data.additional_information != '')) &&
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    { (data.data.description != null && data.data.description != '') &&
                                        <li className="nav-item">
                                            <a className={`nav-link ${descriptionTab == 0 ? 'active' : '' }`} data-toggle="tab"
                                            role="tab" onClick={() => setDescriptionTab(0)}>Description</a>
                                        </li>
                                    }
                                    {   (data.data.additional_information != null && data.data.additional_information != '') &&
                                        <li className="nav-item">
                                            <a className={`nav-link ${descriptionTab == 1 ? 'active' : '' }`} data-toggle="tab" role="tab" onClick={() => setDescriptionTab(1)}>Additional
                                            information</a>
                                        </li>
                                    }
                                </ul>
                                <div className="tab-content">
                                    <div className={`tab-pane ${descriptionTab == 0 ? 'active' : ''}`} id="tabs-5" role="tabpanel">
                                        <div className="product__details__tab__content" dangerouslySetInnerHTML={{ __html: data.data.description }} />
                                    </div>
                                
                                    <div className={`tab-pane ${descriptionTab == 1 ? 'active' : ''}`} id="tabs-7" role="tabpanel">
                                        <div className="product__details__tab__content">
                                            {data.data.additional_information}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
        </section>
    }
    <section className="related spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="related-title">Related Product</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${Product2.src})` }}>
                            <span className="label">New</span>
                        </div>
                        <div className="product__item__text">
                            <h6>Piqué Biker Jacket</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                           
                            <h5>$67.24</h5>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
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
               
            </div>
        </div>
    </section>
     

    </>       
  );
}
