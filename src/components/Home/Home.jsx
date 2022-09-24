import React , {useContext} from 'react'
import Card from '../Card/Card'
import {motion} from 'framer-motion'
import {DataContext} from '../../App'

function Home() {
    const {games,cartArray,setCartArray,handleAddToCart} = useContext(DataContext)
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:1}}
    >
    <div className='body-container'>
        <h1>Most Played</h1>
        <div className="card-container">
            {games.results.map((game) => (
             <div className='card' key={game.id}>
               
               <Card game={game} cartArray={cartArray} setCartArray={setCartArray} handleAddToCart={handleAddToCart}/>
             </div>
            ))}
        </div>
    </div>
    </motion.div>
  )
}

export default Home