import {useEffect, useState} from 'react'
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import * as S from './style';


const Movie = ({id, coverimg,title,summary,genres}) =>{
  return(
    <S.Container>
        <S.MovieBox>
            <img src={coverimg} width={160} height={200}/>
            <S.Title>
                <Link to={`/movie/${id}`}>{title}</Link>
            </S.Title>
        </S.MovieBox>
    </S.Container>
        
        
        
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverimg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    // summary:PropTypes.string.isRequired,
    // genre: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
