"use client"
import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import LoadingScreen from '@/components/LoadingScreen';
import { useAppSelector } from '@/store';

export default function ProductDetail() {
    const pathname = usePathname()
    const slug = pathname.replace("/products/","");
    const productApi = useApi(`product-detail/${slug}`);
    const relatedProductApi = useApi(`related-products/${slug}`);

    const animation = useAppSelector((state) => state.splash.splashState);
    const [descriptionTab,setDescriptionTab] = useState(0);
    const [imageTab,setImageTab] = useState(0);
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
        productApi.fetchData()
        relatedProductApi.fetchData()
    },[]);

    if(productApi.data.data === null) {
        router.push('/not-found-404')
    }

    if(productApi.data.data && productApi.data.data != null)
    {
        if((productApi.data.data.description != null && productApi.data.data.description != '') || (
            productApi.data.data.additional_information != null && productApi.data.data.additional_information != ''))
            {
                if(productApi.data.data.description == null || productApi.data.data.description == '') setDescriptionTab(1)
            }
    }

    return (
    <>
        {  (!productApi.isLoading && !relatedProductApi.isLoading)
            ?
            <>
                { productApi.data.data &&
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
                                            productApi.data.data.images.split(',').map((item: any, index: any) => (
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
                                        {productApi.data.data.images.split(',').map((item: any, index: any) => (
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
                                        <h4>{productApi.data.data.name}</h4>
                                        <h3>
                                        { (productApi.data.data.sale_price != null && 
                                                productApi.data.data.sale_price !== "") ? (
                                                    <>
                                                        Rs.{productApi.data.data.sale_price} 
                                                        <span>{productApi.data?.data.price}</span>
                                                    </>
                                                ) : 
                                                (productApi.data.data.discounted_price != null && 
                                                    productApi.data.data.discounted_price !== "")
                                                ?
                                                (
                                                    <>
                                                    Rs.{productApi.data.data.discounted_price} 
                                                    <span>{productApi.data?.data.price}</span>
                                                </>
                                                ):
                                                (
                                                    <>Rs.{productApi.data.data.price}</>
                                                )
                                        }
                                        </h3>
                                        <p>{productApi.data.data.short_discription}</p>
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
                            { ( (productApi.data.data.description != null && productApi.data.data.description != '') || (
                                productApi.data.data.additional_information != null && productApi.data.data.additional_information != '')) &&
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="product__details__tab">
                                            <ul className="nav nav-tabs" role="tablist">
                                                { (productApi.data.data.description != null && productApi.data.data.description != '') &&
                                                    <li className="nav-item">
                                                        <a className={`nav-link ${descriptionTab == 0 ? 'active' : '' }`} data-toggle="tab"
                                                        role="tab" onClick={() => setDescriptionTab(0)}>Description</a>
                                                    </li>
                                                }
                                                {   (productApi.data.data.additional_information != null && productApi.data.data.additional_information != '') &&
                                                    <li className="nav-item">
                                                        <a className={`nav-link ${descriptionTab == 1 ? 'active' : '' }`} data-toggle="tab" role="tab" onClick={() => setDescriptionTab(1)}>Additional
                                                        information</a>
                                                    </li>
                                                }
                                            </ul>
                                            <div className="tab-content">
                                                <div className={`tab-pane ${descriptionTab == 0 ? 'active' : ''}`} id="tabs-5" role="tabpanel">
                                                    <div className="product__details__tab__content" dangerouslySetInnerHTML={{ __html: productApi.data.data.description }} />
                                                </div>
                                            
                                                <div className={`tab-pane ${descriptionTab == 1 ? 'active' : ''}`} id="tabs-7" role="tabpanel">
                                                    <div className="product__details__tab__content">
                                                        {productApi.data.data.additional_information}
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

                { relatedProductApi.data.data &&
                    <section className="related spad">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3 className="related-title">Related Product</h3>
                                </div>
                            </div>
                            <div className="row">
                                {relatedProductApi.data.data.map((item: any, index: number) => (
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6" key={index}>
                                        <div className="product__item">
                                            <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_STORAGE_URL}${item.display_image})` }}>
                                                {   
                                                    (item.is_new == "1" ? 
                                                            <span className="label">New</span>
                                                        :(  item.is_out_of_stock == "1" ?
                                                            <span className="out_of_stock">Out of stock</span>
                                                            :(
                                                                typeof item.sale_price == 'number' ?
                                                                <span className="sale">Sale</span>
                                                                : ''  
                                                            )
                                                        ) )
                                                }
                                            </div>
                                            <div className="product__item__text">
                                                <h6>{item.name}</h6>
                                                <a href="#" className="add-cart">+ Add To Cart</a>
                                                {
                                                    (typeof item.sale_price == 'number') ?
                                                    <h5>Rs. {item.sale_price}</h5>
                                                    :(
                                                        (item.discounted_price != "" && 
                                                            item.discounted_price != null)
                                                        ? <h5>Rs. {item.discounted_price}</h5>
                                                    :
                                                    <h5>Rs. {item.price}</h5>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                }
            </>
            :
            !animation && <LoadingScreen/>  
        }
    </>       
  );
}
