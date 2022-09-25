import React,{useState, useContext} from "react";
import gameLogo from "../../assets/gamepad.jpg";
import { Link,useNavigate } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import { DataContext } from "../../App";


function Navbar() {
  const {cartArray} = useContext(DataContext)
    const [search, setSearch] = useState("");
    let navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      navigate('/search/' + search)
      setSearch('')
    }

  return (
    <div className="navbar">
      <div className="head-container">
        <img src={gameLogo} alt="" height="25px" />
        <h3><Link to = '/'>GameShop</Link></h3>
      </div>
      <div className="search-bar">
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Game"
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </form>
      </div>
      <div className="cart-container" style = {{margin:'20px'}}>
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
