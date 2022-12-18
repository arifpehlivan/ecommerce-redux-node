import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyPrice, deleteProduct, discountPrice } from '../../../features/productSlice';
import './productItem.scss'

const ProductItem = ({ item }) => {
    const product = useSelector((state) => state.items);
    const [discountShowInput,setDiscountShowInput] = useState(true);
    const [discountInput,setDiscountInput] = useState("");
    console.log("discountInput",discountInput)
    const dispatch = useDispatch();
    const handleDeleteProduct = (item) => {
        dispatch(deleteProduct(item));
        alert("Deleted product");
    }
    const handleDiscount = () => {
        setDiscountShowInput(!discountShowInput);

    }
    const handleDiscountInput = (item) => {
        setDiscountInput(discountInput);
        console.log("discountInput111111111",discountInput);
        setDiscountShowInput(!discountShowInput);
        dispatch(discountPrice(item));
        alert("Apply discount")
        setDiscountShowInput(!discountShowInput);
        setDiscountInput("")
        console.log(discountPrice(item))
    }
    const handleInput = (e) => {
        setDiscountInput(e);
        console.log("111111111111111111111111111",discountInput)
        dispatch(applyPrice(discountInput))
    }
    return (

        <div key={item.id} className='productItem'>
            <div className="itemId">Id: {item.id}</div>
            <div className="productItemImage">
                <img src={item.img} alt="" />
                <div className='titleDesc'>
                    <div className="productItemTitle">{item.title}</div>
                    <div className="productItemDesc">{item.desc}</div>
                </div>

            </div>
            {
                discountShowInput ?  (<div className="productItemPrice">$ {item.price}</div>) : (
                    <input 
                    className='discountInput' 
                    type="text" 
                    placeholder='Enter new price'
                    // onChange={(e)=> setDiscountInput(e.target.value)}
                    onChange={(e)=> handleInput(e.target.value)}
                    />
                )
            }
            


            <div className="productDiscount">
                {
                    discountInput ? (
                        <button  onClick={()=> handleDiscountInput(item)}>Apply</button>
                    ):(<button onClick={()=>handleDiscount()}>Discount</button>)
                    
                }
            </div>
            <div className="productDelete">
                <button onClick={() => handleDeleteProduct(item)}>Delete Product</button>
            </div>

        </div>
    )
}

export default ProductItem