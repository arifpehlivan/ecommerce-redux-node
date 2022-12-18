import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../../features/productSlice';
import './addProduct.scss'

const AddProduct = () => {
    // const {items} = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [price, setPrice] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const item = {
        id,
        price,
        title,
        desc,
        img
    }
    // const [item,setItem] = useState({
    //     id :"",
    //     price: "",
    //     title: "",
    //     desc: "",
    //     img: ""
    // }) 
    const [disabled, setDisabled] = useState(true);

    // useEffect(() => {
    //     if (item.id && item.price && item.title && item.desc && item.img) {
    //         setDisabled(false)
    //         document.getElementById("formValue").reset();
    //     }
    // }, [item])


    // console.log("item.length",item.length);

    const handleAddProduct = (item) => {
        // setId(id => id + 1 )
        dispatch(addProduct(item))
        alert("Added product")
        document.getElementById("formValue").reset();
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='addProduct'>
            <div className="form">

                <form onSubmit={handleSubmit} id="formValue">
                    <input type="text" placeholder='Id' onChange={(e) => setId(e.target.value)} />
                    <input type="text" placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
                    <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                    <textarea type="text" placeholder='Desc' onChange={(e) => setDesc(e.target.value)} />
                    {/* <input type="file" multiple accept="image/*" style={{border: "none"}} onChange={(e)=> setImg(e.target.value)}/> */}
                    <input type="text" placeholder='Enter img url' onChange={(e) => setImg(e.target.value)} />
                    <button type='submit' onClick={() => handleAddProduct(item)} >Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct