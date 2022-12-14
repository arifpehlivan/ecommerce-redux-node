import React from 'react'
import AdminNavbar from '../components/admin/adminNavbar/AdminNavbar'
import ProductList from '../components/admin/productList/ProductList'

const AdminScreen = () => {
    return (
        <div>
            <AdminNavbar/>
            <div>
                <ProductList/>
            </div>
        </div>
    )
}

export default AdminScreen