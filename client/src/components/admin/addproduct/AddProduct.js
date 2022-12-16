import { useSelector } from 'react-redux'
import './addProduct.scss'

const AddProduct = () => {
    const {items,status} = useSelector(state => state.products);
    return (  
            <div className='addProduct'> 
                <div className="form">
                    
                    <form>
                        <input type="text" placeholder='Id' />
                        {/* onChange={onImageChange} */}
                        <input type="text" placeholder='Price' />
                        <input type="text" placeholder='Title' />
                        <textarea type="text" placeholder='Desc' />
                        <input type="file" multiple accept="image/*" style={{border: "none"}}/>
                        <button>Add Product</button>
                    </form>
                </div>
            </div>
    )
}

export default AddProduct