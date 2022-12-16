import Navbar from '../navbar/Navbar'
import './shoppingCart.scss'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { removeFromCart } from '../../features/cartSlice';

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleRemoveCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }
    return (
        <>
            <Navbar />
            <div className='shoppingCart'>

                <h4>Shopping Cart</h4>
                {
                    cart.cartItems.length === 0 ? (
                        <div className="cartEmpty">
                            <p>Your cart is empty.</p>
                            <div className="startShopping">
                                <Link to="/">
                                    <WestOutlinedIcon/>
                                    <span>Start Shopping</span>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="titles">
                                <h3 className="productTitle">Product</h3>
                                <h3 className="price">Price</h3>
                                <h3 className="quantity">Quantity</h3>
                                <h3 className="total">Total</h3>
                            </div>
                            <div className="cartItems">
                                {
                                    cart.cartItems?.map(cartItem => (
                                        <div className="cartItem" key={cartItem.id}>
                                            <div className="cartProduct">
                                                <img src={cartItem.img} alt={cartItem.title} />
                                                <div>
                                                    <h3>{cartItem.title}</h3>
                                                    <p>{cartItem.desc}</p>
                                                    <button onClick={()=> handleRemoveCart(cartItem)}>Remove</button>
                                                </div>
                                            </div>
                                            <div className="productPrice">$ {cartItem.price}</div>
                                            <div className="cartQuantity">
                                                <button>-</button>
                                                <div className="count">{cartItem.cartQuantity}</div>
                                                <button>+</button>
                                            </div>
                                            <div className="productTotalPrice">
                                                $ {cartItem.price * cartItem.cartQuantity}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="cartSummary">
                                <button className="clearCart">
                                    Clear Cart
                                </button>
                                <div className="cartCheckout">
                                    <div className="subTotal">
                                        <span>Subtotal </span>
                                        <span className="amount">${cart.cartAmount}</span>
                                    </div>
                                    <button>Pay</button>
                                    <div className="contunieShopping">
                                        <Link to="/">
                                            <WestOutlinedIcon/>
                                            <span>Contunie Shopping</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>

    )
}

export default ShoppingCart