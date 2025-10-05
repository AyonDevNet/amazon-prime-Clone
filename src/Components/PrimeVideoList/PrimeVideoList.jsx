import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topMovie, latestMovie } from '../../Redux/RecommendedMovies/action'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import MiniVideoPlayer from '../MiniVideoPlayer/MiniVideoPlayer';
import './PrimeVideoList.css'


const PrimeVideoList = () => {

  const dispatch = useDispatch()
  const movies = useSelector((store) => store.recMovies.topMovie)
  const latestMovies = useSelector((store) => store.recMovies.latestMovie)
  // console.log('latestMovie:', latestMovie)
  // console.log('movies99:', movies)

  useEffect(() => {
    // getstate()
    getMovieData('Friends')
    getMovieData('Harry')
  }, [])

  // const getstate = () => {
  //     axios.get(`http://www.omdbapi.com/?s=Marvel&apikey=70da77ac`).then((res) => {
  //         const {data,status,statusText} = res
  //         console.log('data,status,statusText:', data,status,statusText)
  //         console.log('res:', res)
  //         dispatch(recommemdedMovie(data.Search))
  //     })
  // }

  const getMovieData = (name) => {
    axios.get(`https://www.omdbapi.com/?s=${name}&apikey=70da77ac`).then((res) => {
      const { data, status, statusText } = res;

      if (name === 'Friends') {

        dispatch(topMovie(data.Search))
      }
      else if (name === "Harry") {
        console.log('latestMovie', data)
        dispatch(latestMovie(data.Search))
      }
    })
  }

  // ------------
  const top_ref = useRef(null);
  const latest_movies_ref = useRef(null)
  const top_ref_moveRight = (scrollOffset) => {
    top_ref.current.scrollLeft += scrollOffset;
  }
  const top_ref_moveLeft = (scrollOffset) => {
    top_ref.current.scrollLeft -= scrollOffset;
  }
  const latest_movies_ref_moveRight = (scrollOffset) => {
    latest_movies_ref.current.scrollLeft += scrollOffset;
  }
  const latest_movies_ref_moveLeft = (scrollOffset) => {
    latest_movies_ref.current.scrollLeft -= scrollOffset;
  }

  return (
    <div>
      <h3 className='home-headlines' >Recommended Series</h3>
      <div className='moviesDisplay' ref={top_ref} >
        <FaAngleLeft className='top-left-arrow-shadow' onClick={() => { top_ref_moveLeft(500) }} />
        <FaAngleRight className='top-right-arrow-shadow' onClick={() => { top_ref_moveRight(500) }} />
        {movies.map((e, i) => (
          <div className='IndividualPoster' key={i} >
            <Link to={`/movieDetails/${e.imdbID}`}>
              <img src={e.Poster} alt={e.Title} />
            </Link>

          </div>
        ))}
      </div>
      {/* -------------------------------------- */}
      <h3 className='home-headlines' >Latest movies</h3>
      <div className='moviesDisplay' ref={latest_movies_ref} >
        <FaAngleLeft className='latest-left-arrow-shadow top-left-arrow-shadow' onClick={() => { latest_movies_ref_moveLeft(500) }} />
        <FaAngleRight className='latest-right-arrow-shadow top-right-arrow-shadow' onClick={() => { latest_movies_ref_moveRight(500) }} />
        {latestMovies.map((e, i) => (
          <div className='IndividualPoster' key={i} >
            <Link to={`/movieDetails/${e.imdbID}`}>
              <img src={e.Poster} alt={e.Title} />
            </Link>

          </div>
        ))}


      </div>
    </div>
  )
}

export default PrimeVideoList