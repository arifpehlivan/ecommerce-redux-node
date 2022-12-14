import Product from '../product/Product.js'
import './products.scss'
import  {productItems}  from "../../data.js"
import { useState } from "react";
import { useSelector } from 'react-redux';

const Products = () => {
    const {items} = useSelector(state => state.products);
    return (
        <div className='products'>
            {
                items.map((item) => {
                    return (
                        <Product item={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default Products