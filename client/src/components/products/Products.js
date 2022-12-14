import Product from '../product/Product.js'
import './products.scss'
import  {productItems}  from "../../data.js"
import { useState } from "react";

const Products = () => {
    // const [products, setProducts] = useState(productItems);
    // console.log(products)
    return (
        <div className='products'>
            {
                productItems.map((item) => {
                    return (
                        <Product item={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default Products