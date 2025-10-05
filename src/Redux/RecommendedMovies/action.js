export const RECOMMENDED_MOVIE = 'RECOMMENDED_MOVIE';
export const HORROR_MOVIE = 'HORROR_MOVIE';
export const TOP_MOVIE = 'TOP_MOVIE'
export const LATEST_MOVIE = 'LATEST_MOVIE'
export const DISPLAYSINGLEMOVIE = 'DISPLAYSINGLEMOVIE'

export const recommemdedMovie = (recommemdedMovie) => {
    return{
        type:RECOMMENDED_MOVIE,
        payload:recommemdedMovie
    }
}

export const horrorMovie = (horrorMovie) => ({type:HORROR_MOVIE,payload:horrorMovie})
export const topMovie = (topMovie) => ({type:TOP_MOVIE,payload:topMovie})
export const latestMovie = (latestMovie) => ({type:LATEST_MOVIE,payload:latestMovie})

// for MovieDetailspage
// export const displaySingleMovieData = (payload) => ({type:DISPLAYSINGLEMOVIE,payload})
export const displaySingleMovieData = (displaySingleMovieData) => ({type:DISPLAYSINGLEMOVIE,payload:displaySingleMovieData})

