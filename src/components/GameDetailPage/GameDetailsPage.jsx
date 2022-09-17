import React, { useState, useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

function GameDetailsPage() {
  const [gameData, setgameData] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  let params = useParams();
  let navigate = useNavigate()


  const fetchGame = async () => {
    try{
        const response = await axios.get(`https://api.rawg.io/api/games/${params.detail}?key=${process.env.REACT_APP_SECRET_API_KEY}`)
        setgameData(response.data)
        setGenres(response.data.genres)
    }catch(err){
        setError(err)
    }
  };

  useEffect(() => {
    fetchGame()
  },[params.detail])

  return(
    <div>
      <div className="game-details">
        <div className="game-img">
          <img src={gameData.background_image} alt= {gameData.name} />
        </div>
        <div className="content-detail">
          <h2>{gameData.name}</h2>
          <h3>About</h3>
          <p dangerouslySetInnerHTML={{__html:gameData.description}}></p>

          <h2>Genre</h2>
            <div className='style-genre'>
            {genres.map(genre => (
              <p key = {genre.id}>{genre.name},</p>
            ))}
            </div>
            <h2>Price</h2>
            <div className="cart">
            <p>${(gameData.rating + gameData.rating_top).toFixed(2)}</p>
            <button
             onClick={() => navigate('/')}
             >Go Home To Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
  ) ;
}

export default GameDetailsPage;
