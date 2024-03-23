"use client"
import React, { useEffect,useState } from 'react';
import { findSettingByKey } from "@/helper/settingHelper";
import useApi from '@/hooks/useApi';
import Link from 'next/link';
export default function Home() {
    const [tag,setTag] = useState(0);

    const facebookLink = findSettingByKey("fb-link");
    const tiktokLink = findSettingByKey("tik-tok-link");
    const instaLink = findSettingByKey("insta-link");
    const pinterestLink = findSettingByKey("pinterest-link");

    const bannerApi = useApi('banner');
    const midBannerApi = useApi('mid-banners')
    const saleProductApi = useApi('sale-product')
    const filterTagApi = useApi('filter-tag')

    useEffect(() => {
        bannerApi.fetchData()
        midBannerApi.fetchData()
        saleProductApi.fetchData()
        filterTagApi.fetchData()
    },[]);
    
    
    return (
        <>
            { bannerApi['data']['data'] &&
                <section className="hero">
                    <div className="hero__slider">
                        <div className="hero__items set-bg" style={{ backgroundImage:  `url(${process.env.NEXT_PUBLIC_STORAGE_URL}${bannerApi['data']['data']['image']})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-7 col-md-8">
                                        <div className="hero__text">
                                            { (bannerApi['data']['data']['heading_1'] != "") &&
                                                <h6>{bannerApi['data']['data']['heading_1']}</h6>
                                            }
                                            { (bannerApi['data']['data']['heading_2'] != "") &&
                                                <h2>{bannerApi['data']['data']['heading_2']}</h2>
                                            }
                                            { (bannerApi['data']['data']['text'] != "") &&
                                                <p>{bannerApi['data']['data']['text']}</p>
                                            }
                                            {bannerApi['data']['data']['button_text'] !== "" && (
                                                <>
                                                    {bannerApi['data']['data']['show_search'] === "1" ? (
                                                        <Link
                                                            href={{
                                                                pathname: bannerApi['data']['data']['button_link'],
                                                                query: {
                                                                    searchKey: bannerApi['data']['data']['search_key'],
                                                                    searchValue: bannerApi['data']['data']['search_value']
                                                                }
                                                            }}
                                                            className="primary-btn"
                                                        >
                                                            {bannerApi['data']['data']['button_text']}
                                                            <span className="arrow_right"></span>
                                                        </Link>
                                                    ) : (
                                                        <Link
                                                            href={{ pathname: bannerApi['data']['data']['button_link'] }}
                                                            className="primary-btn"
                                                        >
                                                            {bannerApi['data']['data']['button_text']}
                                                            <span className="arrow_right"></span>
                                                        </Link>
                                                    )}
                                                </>
                                            )}

                                            <div className="hero__social">
                                                { (facebookLink && facebookLink.value!= "")  &&
                                                    <a href={facebookLink?.value}><i className="fa fa-facebook"></i></a>
                                                }
                                                { (pinterestLink && pinterestLink.value != "" ) &&
                                                    <a href={pinterestLink?.value}><i className="fa fa-pinterest"></i></a>
                                                }
                                                { (instaLink && instaLink.value != "" ) &&
                                                    <a href={instaLink}><i className="fa fa-instagram"></i></a>
                                                }
                                                { (tiktokLink && tiktokLink.value != "" ) &&
                                                    <a href="#">
                                                        <i className="fa">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                                                                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                                                            </svg>    
                                                        </i>
                                                    </a>
                                                }
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

            { midBannerApi['data']['data'] &&
                <section className="banner spad">
                    <div className="container">
                        <div className="row">
                        {
                            midBannerApi.data.data.map((item:any, index:number) => (
                                <div className={`${index % 2 === 0 ? 'col-lg-7 offset-lg-4' : 'col-lg-5'}`}
                                key={index}>
                                    <div className={`banner__item ${index % 2 === 0 ? '' : 'banner__item--middle'}`}>
                                        <div className="banner__item__pic">
                                            <img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${item.image}`} alt={item.name} name={item.name}/>
                                        </div>
                                        <div className="banner__item__text">
                                            <h2>{item.heading_1}</h2>
                                            {
                                                ( item.show_search == "1" ?
                                                    <Link href={{ pathname: item.button_link, query: {
                                                        searchKey: item.search_key,
                                                        searchValue: item.search_value
                                                    } }}>{item.button_text}</Link>
                                                :
                                                    <Link href={{ pathname: item.button_link }}>{item.button_text}</Link>
                                                )
                                            }    
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </section>
            }

    
            { filterTagApi['data']['data'] &&
                <section className="product spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="filter__controls">
                                    {
                                        filterTagApi.data.data.map((item:any, index:number) => (

                                            <li className={(tag === index) ? "active" : ""} data-filter="*" key={index} onClick={(e) => setTag(index)} >
                                                {item['tag']['name']}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="row product__filter">
                            
                        {
                            filterTagApi.data.data[tag].products.map((item: any, index: number) => (
                                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals" key={index}>
                                    <div className="product__item">
                                        <Link href={`/products/${item.slug}`}>
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
                                        </Link>
                                        <div className="product__item__text">
                                            <h6>{item.name}</h6>
                                            <a href="#" className="add-cart">+ Add To Cart</a>
                                            <h5>Rs. {item.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                           
                          
                        </div>
                    </div>
                </section>
            }
            { (saleProductApi['data']['data'] != null) && 
                <section className="categories spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="categories__text">
                                    <h2>{ saleProductApi.data.data.text_1 ?? '' } <br /> 
                                        <span>{ saleProductApi.data.data.text_2 ?? '' }
                                        </span> <br /> { saleProductApi.data.data.text_3 ?? '' }</h2>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="categories__hot__deal">
                                    <img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${saleProductApi.data.data.image}`} alt={saleProductApi.data.data.heading_1} name={saleProductApi.data.data.heading_1} fill/>
                                    <div className="hot__deal__sticker">
                                        <span>Sale Of</span>
                                        <h5>{'Rs. ' +saleProductApi.data.data.sale_price}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1">
                                <div className="categories__deal__countdown">
                                    <span>{saleProductApi.data.data.heading_1}</span>
                                    <h2>{saleProductApi.data.data.name}</h2>
                                    <div className="categories__deal__countdown__timer" id="countdown">
                                        <div className="cd-item">
                                            <span>3</span>
                                            <p>Days</p>
                                        </div>
                                        <div className="cd-item">
                                            <span>1</span>
                                            <p>Hours</p>
                                        </div>
                                        <div className="cd-item">
                                            <span>50</span>
                                            <p>Minutes</p>
                                        </div>
                                        <div className="cd-item">
                                            <span>18</span>
                                            <p>Seconds</p>
                                        </div>
                                    </div>
                                    {   saleProductApi.data.data.show_search ?
                                        <Link href={{ pathname: saleProductApi.data.data.button_link, query: {
                                                    searchKey: saleProductApi.data.data.search_key,
                                                    searchValue: saleProductApi.data.data.search_value
                                                } }} className="primary-btn">{saleProductApi.data.data.button_text}</Link>
                                        :
                                        <Link href={{ pathname: saleProductApi.data.data.button_link}} className="primary-btn">{saleProductApi.data.data.button_text}</Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }   

        </>       
    );
}
