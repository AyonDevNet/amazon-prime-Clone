import { combineReducers, createStore } from "redux";
import { movieListreducer } from "./RecommendedMovies/reducer";

const rootReducer = combineReducers({
    recMovies: movieListreducer

})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)