import React from 'react'
import {Link} from 'react-router-dom'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



function Card({game,cartArray,setCartArray,handleAddToCart}) {

  return (
    <div>
      <div className="card-content">
      <Link to = {'/detailspage/' + game.id} >
        <img src={game.background_image} alt={game.name} />
        </Link>
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
        <span>${(game.rating + game.rating_top).toFixed(2)}</span>
      </div>
    </div>
  )
}

export default Card