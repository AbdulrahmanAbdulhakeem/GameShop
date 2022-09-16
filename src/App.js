import React, { useState } from "react";
import { Navbar, Home } from "./components";
import useFetch from "./utils/useFetch";

export const DataContext = React.createContext();

function App() {
  const[cartArray , setCartArray] = useState([])
  const {
    error,
    isPending,
    data: games,
  } = useFetch(
    `https://api.rawg.io/api/games?key=${process.env.REACT_APP_SECRET_API_KEY}`
  );
  console.log(games)
  return (
    <div className="App">
      <DataContext.Provider value={{games,cartArray,setCartArray}}>
        <Navbar />
        <Home />
      </DataContext.Provider>
    </div>
  );
}

export default App;
