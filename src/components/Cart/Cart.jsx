import React,{useContext} from 'react'
import { DataContext } from '../../App'
import useFetch from '../../utils/useFetch'
import {Link, useNavigate} from 'react-router-dom'
import CartItem from './CartItem./CartItem'




function Cart() {
  const {cartArray,setCartArray,cartTotalArray , setCartTotalArray,handleCartTotal,cartBalance} = useContext(DataContext)
  console.log(cartArray)
  // console.log(cartTotalArray)
  let navigate = useNavigate()

  const EmptyCart = () => (
    <div>
      You Have No Item In Your Cart , 
      <Link to = '/'>Start Adding Some</Link>
    </div>
  )

  // console.log()
  const FilledCart = () => (
    <>
    <div className='container'>
    <div className='card-container'>
    {cartArray.map((gameId) => (
      <div className='card'>
      <CartItem id={gameId} total={cartTotalArray} handleCartTotal={handleCartTotal}/>
      </div>
    ))}
    </div>

    <div className='cart-total'>
      <div className='total'>
      <p>Total : ${cartBalance.toFixed(2)}</p>
      </div>

    </div>
    <div className="cart-buttons">
            <button
             onClick={() => navigate('/')}
             >Go Back Home</button>
             <button onClick={() => setCartArray([])}>Empty Cart</button>
             <button
             onClick={(e) => {
              e.preventDefault()
             }}
             >Checkout</button>
            </div>

            </div>
    </>
  )

  // for (let i = 0; i < cartArray.length; i++) {
  //   const {data , isPending , error} = useFetch(`https://api.rawg.io/api/games/${cartArray[i]}?key=${process.env.REACT_APP_SECRET_API_KEY}`)    
  // }

  return (
    <div>
      {!cartArray.length ? <EmptyCart /> : <FilledCart />}
    </div>
  )
}

export default Cart