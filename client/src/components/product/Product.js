import './product.scss'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice';

const Product = ({ item }) => {
    const dispatch = useDispatch();
    const handleAddCart = (item) => {
        dispatch(addToCart(item))
    }
    return (
        <div className='product'>
            <div key={item.id}>
                <div className="productTitle">{item.title}</div>
                <div className="productImage">
                    <img src={item.img} alt="" />
                </div>
                <div className="productDesc">{item.desc}</div>
                <div className="productBottom">
                    <div className="productPrice">{item.price}</div>
                    <button onClick={() => handleAddCart(item)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product