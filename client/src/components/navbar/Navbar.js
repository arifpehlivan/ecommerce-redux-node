import './navbar.scss'
import { Link } from "react-router-dom";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {cartQuantity} = useSelector(state => state.cart)
    return (
        <div className='navbar'>
            <div className="logo">
                <Link to="/">
                    Redux Shopping
                </Link>
            </div>
            <div className="rightSide">
                <div className="shoppingCart">
                    <Link to="/shoppingcart">
                        <Badge badgeContent={cartQuantity} color="primary">
                            <AddShoppingCartRoundedIcon style={{ cursor: "pointer" ,color: "black"}} />
                        </Badge>
                    </Link>
                </div>
                <div className="buttons">
                    <Link to="/admin">Admin</Link>
                </div>
            </div>
        </div >
    )
}

export default Navbar