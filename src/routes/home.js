import React from 'react'
import { useState, useEffect} from 'react';
import Movie from '../components/watchmovie/index';
import * as S from './homestyle'


const Home = () =>{

    const [loding, setLoding] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await(
        await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
        ).json();
        setMovies(json.data.movies);
        setLoding(false);
    }

    useEffect(()=>{
        getMovies()
    },[])

    return(
        <div>

        {loding ? 
        (<h1>Loding..</h1>) 
        : 
        <S.Main>
            {movies.map((movie) => (
                <Movie 
                    id={movie.id}
                    coverimg={movie.medium_cover_image} 
                    title={movie.title} 
                    // summary={movie.summary} 
                    // genres={movie.genres} 
                />    
            ))}
        </S.Main>
        }

        </div>

    )
}
  
export default Home;
