import { HORROR_MOVIE, RECOMMENDED_MOVIE, TOP_MOVIE ,LATEST_MOVIE,DISPLAYSINGLEMOVIE} from "./action";

const initialstate = {
    recMovie: [],
    horrorMovie:[],
    topMovie:[],
    latestMovie:[],
    displaySingleMovie:{}
}

export const movieListreducer = (store = initialstate,{type,payload}) => {
    switch(type){
        case RECOMMENDED_MOVIE:
            // console.log("hii");
            return {...store,recMovie:[...payload]}

        case HORROR_MOVIE:
            return {...store,horrorMovie:[...payload]}

        case TOP_MOVIE:
            return {...store,topMovie:[...payload]}

        case LATEST_MOVIE:
            return {...store,latestMovie:[...payload]}

        case DISPLAYSINGLEMOVIE:
            return {...store,displaySingleMovie:{payload}}

        default:
            return store
    }
}