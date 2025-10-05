import axios from 'axios'
import React, { useEffect,useRef } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {recommemdedMovie,horrorMovie} from '../../Redux/RecommendedMovies/action'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';
// import MiniVideoPlayer from '../MiniVideoPlayer/MiniVideoPlayer';
import { Link } from 'react-router-dom';
import './Recommended.css'


const Recommended = () => {

    const dispatch = useDispatch()
    const movies = useSelector((store) => store.recMovies.recMovie)
    const horror_movie = useSelector((store) => store.recMovies.horrorMovie)
    // console.log('movies99:', movies)

    useEffect(() => {
        getstate()
        getHorrorMovie('horror')
    },[])

    const getstate = () => {
        axios.get(`https://www.omdbapi.com/?s=Marvel&apikey=70da77ac`).then((res) => {
            const {data,status,statusText} = res
            console.log('data,status,statusText:', data,status,statusText)
            console.log('res:', res)
            dispatch(recommemdedMovie(data.Search))
        })
    }

    const getHorrorMovie = (name) => {
      axios.get(`https://www.omdbapi.com/?s=${name}&apikey=70da77ac`).then((res) => {
        const {data,status,statusText} = res;

        if(name === 'horror'){
        console.log('reshorror:', res)
          dispatch(horrorMovie(data.Search))
        }
        else{
          console.log("Not horror");
        }
      })
    }

    // ------------
    const ref = useRef(null);
    const horror_ref = useRef(null)
    const moveRight = (scrollOffset) => {
      ref.current.scrollLeft += scrollOffset;
    }
    const moveLeft = (scrollOffset) => {
      ref.current.scrollLeft -= scrollOffset;
    }
    const horror_moveRight = (scrollOffset) => {
      horror_ref.current.scrollLeft += scrollOffset;
    }
    const horror_moveLeft = (scrollOffset) => {
      horror_ref.current.scrollLeft -= scrollOffset;
    }

  return (
    <div className='Recommended_Div_Component'>
      <h3 className='home-headlines' >Recommended movies</h3>
      <div className='moviesDisplay' ref={ref} >
        <FaAngleLeft className='left-arrow-shadow' onClick={() => {moveLeft(500)}} />
        <FaAngleRight className='right-arrow-shadow' onClick={() => {moveRight(500)}}  />
      {movies.map((e,i) => (
          <div className='IndividualPoster' key={i} >
            {/* <img src={e.Poster} alt={e.Title} /> */}
            <Link to={`/movieDetails/${e.imdbID}`}>
            <img src={e.Poster} alt={e.Title} />
            </Link>
          </div>
          ))}
      </div>
      {/* -------------------------------------- */}
      <h3 className='home-headlines' >Horror movies</h3>
      <div className='moviesDisplay' ref={horror_ref} >
        <FaAngleLeft className='horror-left-arrow-shadow left-arrow-shadow' onClick={() => {horror_moveLeft(500)}} />
        <FaAngleRight className='horror-arrow-shadow right-arrow-shadow' onClick={() => {horror_moveRight(500)}}  />
      {horror_movie.map((e,i) => (
          <div className='IndividualPoster' key={i} >
            <Link to={`/movieDetails/${e.imdbID}`}>
            <img src={e.Poster} alt={e.Title} />
            </Link>
            
          </div>
          ))}

      {/* <MiniVideoPlayer/> */}
      </div>
    </div>
  )
}

export default Recommended