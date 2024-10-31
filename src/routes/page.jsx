import React , {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const Page = () => {

  const [loding, setLoding] = useState(true)
  const [movie, setMovie] = useState([])

  const {id} = useParams()
  const getMovie = async() =>{
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie)
    setLoding(false)
    console.log(json)
  };

  useEffect(()=>{
    getMovie();
  },[])


  return (
    <div>
      {loding 
      ? 
      (<h1>details</h1> )
      : 
      (<div>
        <img src={movie.medium_cover_image}/> 
        <h1>{movie.title}</h1>
        <p>상영시간: {movie.runtime}분</p>
        <p>평점: {movie.rating}</p>
        <p>장르: {movie.genres.map(g => <li key={g}>{g}</li>)}</p>
      </div>
     )
        
      
      }
      
    </div>
  )
}

export default Page
