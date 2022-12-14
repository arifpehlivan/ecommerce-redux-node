import AdminNavbar from '../adminNavbar/AdminNavbar'
import './addProduct.scss'

const AddProduct = () => {
    return (
        <>
            <AdminNavbar />
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
        </>

    )
}

export default AddProduct