import './productList.scss'
import  {productItems}  from "../../../data.js"
import ProductItem from "../../admin/productItem/ProductItem"

const ProductList = () => {
    return (
        <div className='productList'>
            {
                productItems.map((item) => {
                    return (
                        <ProductItem item={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default ProductList