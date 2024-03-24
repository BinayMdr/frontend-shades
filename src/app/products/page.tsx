"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams,usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import useApi from '@/hooks/useApi';
import ProductDetail from '@/components/ProductDetail';
import LoadingScreen from '@/components/LoadingScreen';
import { useAppSelector } from '@/store';

export default function Products() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchKey,setSearchKey] = useState<String|null>(null);
    const [searchValue,setSearchValue] = useState<String|null>(null);

    const categoryApi = useApi('categories');
    const colorApi = useApi('colors')
    const tagApi = useApi('tags')
    const brandApi = useApi('brands')

    const animation = useAppSelector((state) => state.splash.splashState);
    const pathname = usePathname()

    const [showCategory,setShowCategory] = useState(true);
    const [category,setCategory] = useState('');
    const [showColor,setShowColor] = useState(true);
    const [color,setColor] = useState('');
    const [showBrand,setShowBrand] = useState(true);
    const [brand,setBrand] = useState('');
    const [showTag,setShowTag] = useState(true);
    const [tag,setTag] = useState('');
    const [showPrice,setShowPrice] = useState(true);
    const [price,setPrice] = useState('');
    const [priceFilter,setPriceFilter] = useState('Low');
    const [search,setSearch] = useState('')
    const [page,setPage] = useState('1')
    const [productApiData, setProductApiData] = useState<any[]>([]);

    useEffect(() => {
        const key = searchParams.get('searchKey');
        const value = searchParams.get('searchValue');
        
        if (key !== null && value !== null) {
            setSearchKey(key);
            setSearchValue(value);
        }
    }, [searchParams]);

    useEffect(() => {
        if (searchKey !== null && searchValue !== null) {
            router.replace('/products');
        }
    }, [searchKey, searchValue, router]);

    const fetchProducts = async () => {
        const queryParams = new URLSearchParams({
            category: category,
            color: color,
            brand: brand,
            tag: tag,
            price: price,
            search: search,
            priceFilter:priceFilter,
            page:page
        });
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}products?${queryParams.toString()}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setProductApiData(data);
        } catch (error) {
            setProductApiData([]);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [category, color, brand, tag, price,priceFilter, search,page]);

    const getPageRange = (currentPage: number, totalPages: number, maxPagesToShow: number): number[] => {
        const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
        let startPage = Math.max(1, currentPage - halfMaxPagesToShow);
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
        if (totalPages <= maxPagesToShow) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= halfMaxPagesToShow + 1) {
                endPage = maxPagesToShow;
            }
            else if (currentPage >= totalPages - halfMaxPagesToShow) {
                startPage = totalPages - maxPagesToShow + 1;
            }
        }
        
        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    const resetSearch = () => {
        setCategory('')
        setBrand('')
        setColor('')
        setTag('')
        setPrice('')
    }

  return (
    <>
        { (!categoryApi.isLoading && !colorApi.isLoading && !brandApi.isLoading
            && !tagApi.isLoading && productApiData && Object.keys(productApiData).length != 0)
            ?
                <>
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
                                                <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                                                {
                                                    (search != '') &&
                                                    <button type="button" onClick={() => setSearch('')}><span className="fa fa-close"></span></button>
                                                }
                                            </form>
                                        </div>
                                        <div className="shop__sidebar__accordion">
                                            <div class="reset-div">
                                                <button className="reset-button" onClick={resetSearch}><span className="fa fa-trash"></span></button>
                                            </div>
                                            <div className="accordion" id="accordionExample">
                                                {   categoryApi.data.data &&
                                                    <div className="card">
                                                        <div className="card-heading">
                                                            <a data-toggle="collapse" data-target="#collapseOne" onClick={() => setShowCategory(!showCategory)}>Categories</a>
                                                        </div>
                                                        <div id="collapseOne" className={`collapse ${showCategory ? 'show' : ''}`} data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <div className="shop__sidebar__categories">
                                                                    <ul className="nice-scroll">
                                                                        {
                                                                            categoryApi.data.data.map((item:any,index:number) => (

                                                                                <li key={index}><a
                                                                                onClick={() => setCategory(item.name)}  
                                                                                className={category === item.name ? 'active' : ''}
                                                                                >{item.name}</a></li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                                {   brandApi.data.data &&
                                                    <div className="card">
                                                        <div className="card-heading">
                                                            <a data-toggle="collapse" data-target="#collapseTwo" onClick={() => setShowBrand(!showBrand)}>Branding</a>
                                                        </div>
                                                        <div id="collapseTwo" className={`collapse ${showBrand ? 'show' : ''}`} data-parent="#accordionExample">
                                                            <div className="card-body">
                                                            <div className="shop__sidebar__categories">
                                                                    <ul className="nice-scroll">
                                                                        {
                                                                            brandApi.data.data.map((item:any,index:number) => (

                                                                                <li key={index}><a 
                                                                                onClick={() => setBrand(item.name)}  
                                                                                className={brand === item.name ? 'active' : ''}>{item.name}</a></li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>  
                                                }
                                                {   colorApi.data.data &&
                                                    <div className="card">
                                                        <div className="card-heading">
                                                            <a data-toggle="collapse" data-target="#collapseEight" onClick={() => setShowColor(!showColor)}>Color</a>
                                                        </div>
                                                        <div id="collapseEight" className={`collapse ${showColor ? 'show' : ''}`} data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <div className="shop__sidebar__categories">
                                                                    <ul className="nice-scroll">
                                                                        {
                                                                            colorApi.data.data.map((item:any,index:number) => (

                                                                                <li key={index}><a 
                                                                                onClick={() => setColor(item.name)}  
                                                                                className={color === item.name ? 'active' : ''}>{item.name}</a></li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                                <div className="card">
                                                    <div className="card-heading">
                                                        <a data-toggle="collapse" data-target="#collapseThree" onClick={() => setShowPrice(!showPrice)}>Filter Price</a>
                                                    </div>
                                                    <div id="collapseThree" className={`collapse ${showPrice ? 'show' : ''}`} data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="shop__sidebar__price">
                                                                <ul>
                                                                    <li><a onClick={() => setPrice('500-1499')}  
                                                                            className={price === '500-1499' ? 'active' : ''}
                                                                        >Rs. 500 - Rs. 1499</a></li>
                                                                    <li><a onClick={() => setPrice('1500-2499')}  
                                                                            className={price === '1500-2499' ? 'active' : ''}
                                                                        >Rs. 1500 - Rs. 2499</a></li>
                                                                    <li><a onClick={() => setPrice('2500-3499')}  
                                                                            className={price === '2500-3499' ? 'active' : ''}
                                                                        >Rs. 2500 - Rs. 3499</a></li>
                                                                    <li><a onClick={() => setPrice('3500-4499')}  
                                                                            className={price === '3500-4499' ? 'active' : ''}
                                                                        >Rs. 3500 - Rs. 4499</a></li>
                                                                    <li><a onClick={() => setPrice('5000+')}  
                                                                            className={price === '5000+' ? 'active' : ''}
                                                                        >Rs. 5000+</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                { tagApi.data.data &&
                                                    <div className="card">
                                                        <div className="card-heading">
                                                            <a data-toggle="collapse" data-target="#collapseSix" onClick={() => setShowTag(!showTag)}>Tags</a>
                                                        </div>
                                                        <div id="collapseSix" className={`collapse ${showTag ? 'show' : ''}`} data-parent="#accordionExample">
                                                            <div className="card-body">
                                                                <div className="shop__sidebar__tags">
                                                                    {
                                                                        tagApi.data.data.map((item:any,index:number) => (

                                                                            <a key={index}
                                                                                onClick={() => setTag(item.name)}  
                                                                                className={tag === item.name ? 'active' : ''}
                                                                            >{item.name}</a>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    (productApiData && Object.keys(productApiData).length != 0) &&
                                    <div className="col-lg-9">
                                        <div className="shop__product__option">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="shop__product__option__left">
                                                        {
                                                            productApiData.data.total != 0 ?
                                                            <p>Showing {productApiData?.data.from}–{productApiData?.data.to} of 
                                                            {" " +productApiData?.data.total} results</p>
                                                            : <p> Showing 0 results</p>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="shop__product__option__right">
                                                        <p className="mr-2">Sort by Price: </p>
                                                        <select className="sortSelect" onChange={(e) => setPriceFilter(e.target.value)}>
                                                            <option value="Low">Low To High</option>
                                                            <option value="High">High To Low</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">

                                            {  productApiData.data.data.map((item:any,index:number) => (
                                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                                    <ProductDetail item={item}/>
                                                </div>
                                                ))
                                            }
                                            
                                            
                                        </div>
                                        {   productApiData.data.total != 0 &&
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="product__pagination">
                                                        {getPageRange(productApiData.data.current_page, productApiData.data.last_page, 8).map((page) => (
                                                            <a key={page} className={page === productApiData.data.current_page ? 'active' : ''} onClick={() => setPage(page.toString())}>
                                                                {page}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </section>
                </>
            : !animation && <LoadingScreen/>  
        }
    </>       
  );
}
