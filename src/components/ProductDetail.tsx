import Link from 'next/link';
import React from 'react';

interface ModalProps {
    item:{
      name: string;
      display_image: string;
      is_out_of_stock: string;
      sale_price: string;
      is_new: string;
      discounted_price: string;
      price: string;
      slug:string;
    }
  }

const ProductDetail: React.FC<ModalProps> = ({item}) => {
  return (
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
                    <a className="add-cart">+ Add To Cart</a>
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
  );
};

export default ProductDetail;
