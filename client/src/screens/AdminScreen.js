import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Products from '../components/products/Products'

const AdminScreen = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Products/>
            </div>
        </div>
    )
}

export default AdminScreen