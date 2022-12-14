import { Link } from 'react-router-dom'
import './adminNavbar.scss'

const AdminNavbar = () => {
    return (
        <div className='adminNavbar'>
            <div className="logo">
                <Link to="/">
                    Redux Shopping
                </Link>
            </div>
            <div className="rightSide">
                <div className="buttons">
                    <button>
                        <Link to="/admin/addproduct">Add Product</Link>
                    </button>
                    <button>
                        <Link to="/admin">List Prodcuts</Link>
                    </button>
                    <button>
                        <Link to="/admin/orders">Orders</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar