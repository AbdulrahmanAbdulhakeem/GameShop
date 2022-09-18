import React, { useState } from "react";
import { Navbar, Home, GameDetailsPage } from "./components";
import useFetch from "./utils/useFetch";
import {BrowserRouter  , Routes , Route} from 'react-router-dom'

export const DataContext = React.createContext();

let newCartArray = []

function App() {
  const[cartArray , setCartArray] = useState([])

  const handleAddToCart = (productId) => {
    if(!cartArray.includes(productId)){
      newCartArray = [...cartArray , productId]
      setCartArray(newCartArray)
      console.log(cartArray)
    }
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
      
      <DataContext.Provider value={{games,cartArray,setCartArray, handleAddToCart}}>
        <Navbar />
        <BrowserRouter>
        <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/detailspage/:detail' element={<GameDetailsPage />} />
        </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
