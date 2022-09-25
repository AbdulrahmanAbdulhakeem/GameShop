import React, {useContext} from 'react'
import Card from '../Card/Card'
import useFetch from '../../utils/useFetch';
import { useParams } from 'react-router-dom';
import {motion} from 'framer-motion'
import {DataContext} from '../../App'
import { useEffect } from 'react';


function Search() {
    const {cartArray,setCartArray,handleAddToCart} = useContext(DataContext)
    let params = useParams()
    const {
        data:game,
        isPending,
         error,
       } = useFetch(
        `https://api.rawg.io/api/games?&search=${params.searchresults}&key=${process.env.REACT_APP_SECRET_API_KEY}`
       );


       useEffect(() => {

       } , [params.searchresults])
      
      console.log(game)
    // let gameSearch = {...game.results}
  return isPending ?(
    <h2>Loading</h2>):
    (
    <div className='body-container'>  
        <div className="card-container">
            {game && game.results.map((game) => (
             <div className='card' key={game.id}> 
               
               <Card game={game} cartArray={cartArray} setCartArray={setCartArray} handleAddToCart={handleAddToCart}/>
             </div>
             ))}
        </div>
    </div>
  )
}

export default Search