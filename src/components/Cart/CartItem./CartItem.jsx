import React from "react";
import useFetch from "../../../utils/useFetch";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { cardActionAreaClasses } from "@mui/material";


function CartItem({ id,total,handleCartTotal ,setCartArray,cartArray,setCartTotalArray}) {
  console.log(id);
  const {
    data:game,
    isPending,
    error,
  } = useFetch(
    `https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_SECRET_API_KEY}`
  );

  let price = (game.rating + game.rating_top).toFixed(2)
  if(game && !total.includes(+price) && !isNaN(price)){
    total.push(+price)
    handleCartTotal(total)
    console.log(total)
  }

  const handleDelete = (id,itemPrice) => {
    console.log(id)
    const newCartArray = cartArray.filter((item) => item !== id)
    const newTotal = total.filter((price) => price !== itemPrice)
    setCartArray(newCartArray)
    setCartTotalArray(newTotal)
    handleCartTotal(newTotal)
    // console.log(newCartArray)
  }

  return (
    <>
      <div className="card-content">
        <Link to={"/detailspage/" + game.id}>
          <img src={game.background_image} alt={game.name} height='250' width='250'/>
        </Link>
        <div className="cart-details">
          <div className="name">
            <h4>{game.name}</h4>
          </div>
          <div className='cart-icon'>
          <CloseIcon onClick={() => handleDelete(game.id , +price)}/>
          </div>
        </div>
        <span>${price}</span>
      </div>
      
      {/* <div className='cart-details'>
      <div className='total'>
      <p>Total:{total && }</p>
      </div>

    </div> */}
      {console.log(total)}
    </>
  );
}

export default CartItem;
