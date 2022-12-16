import { useState } from 'react';
import { useSelector } from 'react-redux'
import './addProduct.scss'

const AddProduct = () => {
    const {items,status} = useSelector(state => state.products);
    const [id,setId] = useState("");
    const [price,setPrice] = useState("");
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [img,setImg] = useState("");
    const data = {
        id,
        price,
        title,
        desc,
        img
    }
    console.log(data)
    return (  
            <div className='addProduct'> 
                <div className="form">
                    
                    <form>
                        <input type="text" placeholder='Id' onChange={(e)=> setId(e.target.value)}/>
                        <input type="text" placeholder='Price' onChange={(e)=> setPrice(e.target.value)}/>
                        <input type="text" placeholder='Title' onChange={(e)=> setTitle(e.target.value)}/>
                        <textarea type="text" placeholder='Desc' onChange={(e)=> setDesc(e.target.value)}/>
                        <input type="file" multiple accept="image/*" style={{border: "none"}} onChange={(e)=> setImg(e.target.value)}/>
                        <button>Add Product</button>
                    </form>
                </div>
            </div>
    )
}

export default AddProduct