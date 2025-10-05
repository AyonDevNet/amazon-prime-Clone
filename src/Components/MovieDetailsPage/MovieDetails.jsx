

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Related } from "./Related"
import { Details } from "./Details"
import { FaImdb, FaPlay, FaPlus, FaDownload, FaPlayCircle } from "react-icons/fa";
import "./movieDetails.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { displaySingleMovieData } from "../../Redux/RecommendedMovies/action";

export const MovieDetails = () => {
    const [moviedata, setmoviedata] = useState({})
    const dispatchOneMovieData = useDispatch()
    const IndividualMovie = useSelector((store) => store.recMovies.displaySingleMovie.payload)
    console.log('IndividualMovie:', IndividualMovie)

    // const data = IndividualMovie
    const data = moviedata
    console.log('data:', data)
    // 
    const { imdbID } = useParams()
    console.log('imdbID:', imdbID)
    
    const asddata =
    {
        "id": 1,
        "title": "Game Over: Kasparov and the Machine",
        "director": "Mirabella Ciani",
        "starring": "Felix Broadley",
        "subtitles": "Bosnian",
        "audio_languages": "Bengali",
        "season": 1,
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "genre": "Documentary",
        "duration": "2 h 50 min",
        "year": "2021",
        "rating": "5.7",
        "producers": "Dil Raju",
        "studio": "24 Frames Factory",
        "content_advisory": "Smoking, substance use, alcohol use, foul language, sexual content, violence",
        "supporting_cast": "Naveen Chandra, Navdeep, Harsha, Mahima Makwana, Karma McCain"
    }
    
    useEffect(() => {
        getSingleMovieData()
    }, [])
    const [page, setPage] = useState("true");
    // const [play, setPlay] = useState(0);
    // console.log(play)
    // const cal = (value) => {
        //     setPlay(play + value);
        //     console.log(value)
        // }
        const [play, setPlay] = useState("true")
        
        const getSingleMovieData = () => {
            axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=70da77ac`).then((res) => {
                console.log('resgetSingleMovieData:', res)
                const { data, status, statusText } = res;
                console.log('data,status,statusText222:', data, status, statusText)
                setmoviedata(res.data)
                dispatchOneMovieData(displaySingleMovieData(res.data))
            })
        }
        // console.log('mmm:', mmm)

        {/* <h1>er</h1> */}
    return (
        <div className="MovieDetails_Div_Component">
            <div className="Main_div"

            // style={{ backgroundImage: "url('https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4b0182f25032adfd88472562ce0b1dd54cdf2e28bdf4ee78ecc04b1cc78da8f4._RI_V_TTW_.png')" }}
            >
                <div className="data_div" style={{ zIndex: '999', overflow: 'hidden' }}>
                    {/* <p>AMAZON ORIGINAL</p> */}
                    <h1 id="title">{data.Title}</h1>
                    <div className="miniDes_div">
                        {/* <p><img className="title_below_img"src="\src\images\imdb.png" alt=""/></p> */}
                        <FaImdb size={'30px'} />
                        {/* <p>{data.Ratings[0].Value}</p> */}
                        <p>{data.Runtime}</p>
                        <p>{data.Year}</p>
                        <p><button className="title_below_btn">X-Ray</button></p>
                        <p><button className="title_below_btn">U/A 18+</button></p>
                        <p><img className="title_below_img" src="\src\images\msg.png" alt="" /></p>
                        {/* <p><img className="title_below_img" src={data.Poster} alt=""/></p> */}
                    </div>
                    <p>{data.description}</p>
                    <div className="playOpt_div">
                        {/* <button id="play_btn" onClick={() => { cal(+1) }}>{play === 0 ? "Play" : "Continue Watching"}</button> */}
                        {/* <button id="play_btn" onClick={() => setPlay(!play)}>{play? "Play" : "Continue Watching"}</button> */}
                        {/* <div> */}
                        {/* <FaPlay size={'20px'} style={{background:'transparent'}}/> */}
                        {/* <h3 style={{background:'transparent'}}>Play</h3> */}
                        {/* </div> */}
                        {/* <p><img style={{ width: "40%",marginRight:"30px" }} src="\src\images\play.png" alt=""/></p> */}
                        {/* <p><img style={{ width: "50%" }} src="\src\images\add.png" alt="watchList" /></p> */}
                        {/* <p><img style={{ width: "25%" }} src="\src\images\watchParty.png" alt="" /></p> */}
                        {/* <p><img style={{ width: "50%"}} src="\src\images\download.png" alt=""/></p> */}
                        <div className="minivideoPlayer-button">
                            <div>
                                <FaPlay size={'20px'} style={{ background: 'transparent' }} />
                                <h3 style={{ background: 'transparent' }}>Play</h3>
                            </div>
                            <div><FaPlus style={{ background: 'transparent' }} size={'20px'} /></div>
                            <div><FaPlayCircle style={{ background: 'transparent' }} size={'20px'} /></div>
                            <div><FaDownload style={{ background: 'transparent' }} size={'20px'} /></div>
                            {/* <div><IoMdInformationCircle style={{background:'transparent'}} size={'20px'}/></div> */}
                        </div>
                    </div>
                    <div className="extraDetail_div">
                        <div className="headings">
                            <p>Director </p>
                            <p>Starring </p>
                            <p>Genres</p>
                            <p>Subtitles</p>
                            <p>Audio languages</p>
                        </div>
                        <div className="details">
                            <p className="colorChan">{data.Director}</p>
                            <p className="colorChan">{data.Actors}</p>
                            <p className="colorChan">{data.Genre}</p>
                            <p>{data.Language}</p>
                            <p>{data.Language}</p>
                        </div>
                    </div>

                </div>
                <div
                    style={{
                        // backgroundImage: "url('https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4b0182f25032adfd88472562ce0b1dd54cdf2e28bdf4ee78ecc04b1cc78da8f4._RI_V_TTW_.png')",
                        // position: "relative",
                        /* z-index: 100; */
                        /* background-color: rgba(0,0,0,0.5); */
                        opacity: "0.8",
                        backgroundSize: "cover",
                        width: "50%",
                        height: '500px',
                        // border: '1px solid red',
                        marginLeft:'50%'
                    }}
                >
                    {/* <img style={{width:"20%",height:"90%",marginLeft:"0%",overflow:'hidden'}} src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4b0182f25032adfd88472562ce0b1dd54cdf2e28bdf4ee78ecc04b1cc78da8f4._RI_V_TTW_.png"/> */}
                    <img style={{ width: "20%", height: "90%", marginLeft: "0%", overflow: 'hidden' }} src={data.Poster} />
                </div>

            </div>

            <div className="details_below_div">
                <p>By clicking play, you agree to our <span className="colorChan">Terms of Use</span>.</p>
                <div className="side_div">
                    <p><img className="side_div_img" src="\src\images\share.png" alt="" />Share</p>
                    <p><img className="side_div_img" src="\src\images\pencil.png" alt="" />Feedback</p>
                    <p><img className="side_div_img" src="\src\images\help.png" alt="" />Get help</p>
                </div>
            </div>

            <div className="details_navbar">
                <h2 onClick={() => setPage(true)}>Related</h2>
                <h2 onClick={() => setPage(false)}>Details</h2>
            </div>

            <div className="slider_div123">
                {page ? <Related /> : <Details />}

            </div>
        </div>

    )
}