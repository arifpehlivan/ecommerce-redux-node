import './productList.scss'
import  {productItems}  from "../../../data.js"
import ProductItem from "../../admin/productItem/ProductItem"
import { useSelector } from 'react-redux';

const ProductList = () => {
    const {items} = useSelector(state => state.products);
    return (
        <div className='productList'>
            <h1>Product List</h1>
            {
                items.map((item) => {
                    return (
                        <ProductItem item={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default ProductList