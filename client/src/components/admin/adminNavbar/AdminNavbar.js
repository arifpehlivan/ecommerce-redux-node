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
                    <Link to="/admin/addproduct">Add Product</Link>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar