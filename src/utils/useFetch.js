import axios from 'axios'
import React,{ useState, useEffect } from 'react'

function useFetch(url) {
    const [isPending , setIsPending] = useState(true)
    const[data, setData] = useState([])
    const[error , setError] = useState('')
  const fetchData = async () => {
    try{
        const response = await axios.get(url)
        // console.log(response.data.results)
        setData(response.data.results)
        setIsPending(false)
    }catch(err){
        setError(err)
    }

  }

  useEffect(() => {
    fetchData(url)
  },[url])

   return { data, isPending, error };

}

export default useFetch