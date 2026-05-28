import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow.png'
// or back_arrow.webp
import { useParams } from 'react-router-dom'

const Player = () => {

  const { id } = useParams()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}` 
    }
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)

      .then(res => res.json())

      .then(res => {
       
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0])
        }
      })

      .catch(err => console.error(err))

  }, [id])

  return (
    <div className='player'>
   
    <img src={back_arrow} alt='back'  onClick={() => window.history.back()} />

      {
        apiData.key ? (

          <iframe
            width='90%'
            height='90%'
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title='trailer'
            frameBorder='0'
            allowFullScreen
          ></iframe>

        ) : (
          <h1>
            Loading... 
          </h1> 
          // or simply write = No Trailer Available for this Movie/id...

          
        )
      }

      <div className='player-info'>
        <p>{apiData.published_at?.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

    </div>
  )
}

export default Player