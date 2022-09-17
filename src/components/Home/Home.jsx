import React , {useContext} from 'react'
import Card from '../Card/Card'

import {DataContext} from '../../App'

function Home() {
    const {games,cartArray,setCartArray,handleAddToCart} = useContext(DataContext)
    // console.log(cartArray)
  return (
    <div className='body-container'>
        <h1>Most Played</h1>
        <div className="card-container">
            {games.map((game) => (
             <div className='card' key={game.id}>
               
               <Card game={game} cartArray={cartArray} setCartArray={setCartArray} handleAddToCart={handleAddToCart}/>
             </div>
            ))}
        </div>
    </div>
  )
}

export default Home