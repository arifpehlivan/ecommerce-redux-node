import './shoppingCart.scss'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../features/cartSlice';
import { useEffect, useState } from 'react';
import { getOrder } from '../../features/orderSlice';
import {v4} from "uuid";

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart);
    const order = useSelector((state) => state.order);
    const [lat,setLat] = useState("");
    const [lon,setLon] = useState("");
    console.log("order",order);
    console.log("cart",cart)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTotals())
    },[cart,dispatch]);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        })
    })
    const handleRemoveCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }
    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }
    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    const ordersData = {
        id: v4(),
        coordLat: lat,
        coordLon: lon,
        orderItem : cart.cartItems
    }
    const handleOrder = () => {
        var jsonData = JSON.stringify(cart.cartItems);
        console.log("jsonData",jsonData);
        dispatch(getOrder(ordersData))
        alert("payed")
        dispatch(clearCart())
    }
    console.log("order111111111111111111111111",order);
    return (
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
                                                <button onClick={()=> handleDecreaseCart(cartItem)}>-</button>
                                                <div className="count">{cartItem.cartQuantity}</div>
                                                <button onClick={()=> handleIncreaseCart(cartItem)}>+</button>
                                            </div>
                                            <div className="productTotalPrice">
                                                $ {cartItem.price * cartItem.cartQuantity}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="cartSummary">
                                <button className="clearCart" onClick={()=>handleClearCart()}>
                                    Clear Cart
                                </button>
                                <div className="cartCheckout">
                                    <div className="subTotal">
                                        <span>Subtotal </span>
                                        <span className="amount">${cart.cartAmount}</span>
                                    </div>
                                    <button onClick={()=> handleOrder(cart)}>Pay</button>
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
    )
}

export default ShoppingCart