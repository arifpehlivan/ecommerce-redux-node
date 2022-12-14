import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Products from '../components/products/Products'

const HomeScreen = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Products/>
            </div>
        </div>
    )
}

export default HomeScreen