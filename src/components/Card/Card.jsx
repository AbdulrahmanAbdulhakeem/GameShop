import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

let newCartArray = []

function Card({game,cartArray,setCartArray}) {

  const handleAddToCart = (productId) => {
    if(cartArray.includes(productId)){
      return;
    }else{
      newCartArray.push(productId)
      console.log(newCartArray)
    }
  }

  return (
    <div>
      <div className="card-content">
        
        <img src={game.background_image} alt={game.name} />
        <div className='card-details'>
        <div className='name'>
        <h4>{game.name}</h4>
        </div>
        {/* <div className='genre-container'>
        {game.genres.map((genre) => (
          <p key={genre.id}>{genre.name}</p>
        ))}
        </div> */}
        <div className='cart-icon'>
          <AddShoppingCartIcon onClick={() => handleAddToCart(game.id)} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Card