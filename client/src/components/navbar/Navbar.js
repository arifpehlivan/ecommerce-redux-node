import './navbar.scss'
import { Link } from "react-router-dom";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

const Navbar = () => {
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
                        <AddShoppingCartRoundedIcon style={{ cursor: "pointer" }} />
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