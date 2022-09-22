import React,{useState, useContext} from "react";
import gameLogo from "../../assets/gamepad.jpg";
import { Link } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import { DataContext } from "../../App";


function Navbar() {
  const {cartArray} = useContext(DataContext)
    const [search, setSearch] = useState("");
  return (
    <div className="navbar">
      <div className="head-container">
        <img src={gameLogo} alt="" height="25px" />
        <h3><Link to = '/'>GameShop</Link></h3>
      </div>
      <div className="search-bar">
      <form>
      <input
        type="text"
        placeholder="Search Game"
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </form>
      </div>
      <div className="cart-container">
        <Link to ='/cart'>
      <Badge badgeContent={cartArray.length} color="primary">
      <ShoppingBagIcon />
    </Badge>
    </Link>
        </div>
      
    </div>
    
  );
}

export default Navbar;
