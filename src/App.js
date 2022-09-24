import React, { useState } from "react";
import { Navbar, Home, GameDetailsPage } from "./components";
import useFetch from "./utils/useFetch";
import {BrowserRouter  , Routes , Route} from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import { AnimatePresence } from "framer-motion";

export const DataContext = React.createContext();

let newCartArray = []

function App() {
  const[cartArray , setCartArray] = useState([])
  const[cartTotalArray , setCartTotalArray] = useState([])
  const[cartBalance, setCartBalance] = useState(0)

  const handleAddToCart = (productId) => {
    if(!cartArray.includes(productId)){
      newCartArray = [...cartArray , productId]
      setCartArray(newCartArray)
      console.log(cartArray)
    }
  }

  const handleCartTotal = (totalArray) => {
    console.log(totalArray)
    const totalPrice = totalArray.reduce((acc,cur) => {
      return acc + cur
    },0)

    setCartBalance(totalPrice)
    console.log(totalPrice)
  }
  const {
    error,
    isPending,
    data: games,
  } = useFetch(
    `https://api.rawg.io/api/games?key=${process.env.REACT_APP_SECRET_API_KEY}`
  );
  console.log(games.results)
  return isPending ?(
    <h2>Loading ...</h2>
  ):(

    <div className="App">
      
      <DataContext.Provider value={{games,cartArray,setCartArray, handleAddToCart,cartTotalArray , setCartTotalArray, handleCartTotal,cartBalance}}>
        <BrowserRouter>
        <Navbar />
        <AnimatePresence wait>
        <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/detailspage/:detail' element={<GameDetailsPage />} />
        <Route path = '/cart' element = {<Cart />} />
        </Routes>
        </AnimatePresence>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
