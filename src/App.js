import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './Components/HomePage/HomePage';
// import Navbar from './Components/Navbar';
import {Navbar} from './Components/Navbar1/navbar';
import TvShows from './Components/TvShows/TvShows';
import { Navbarfirst } from './Components/Navbar/Navbarfirst';
import { Card } from './Components/cardpage/card'
import { MovieDetails } from './Components/MovieDetailsPage/MovieDetails';
import { Firsthome } from './Components/Landing Home Page/Firsthome'
import SignIn from './Components/ajit/SignIn'
import SignUp from './Components/ajit/SignUp'
import { Address } from './Components/addressPage/addresspage';
import { Landing } from './Components/Landing/landing';
import { NavbarForLanding } from './Components/navforLanding/navforlanding';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import SignUp_Page from './Components/RealSignInSigUp/SignUp_Page';
import SIGNIN from './Components/RealSignInSigUp/SignIn_Page';
import { Footer } from './Components/Footer/Footer015';
import {Wishlist} from './Components/wishllist/wishlist'
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<><NavbarForLanding/><Landing/><Footer/></>}/>
        {/* <Route path='/signIn' element={<><SignIn/></>}/> */}
        <Route path='/signIn' element={<><SIGNIN/></>}/>
        {/* <Route path='/signUp' element={<><SignUp/></>}/> */}
        <Route path='/signUp' element={<><SignUp_Page/></>}/>
        <Route path='/homepage' element={<><Navbar/><HomePage/><Footer/></>}/>
        {/* <Route path='/home' element={<><Navbar/><HomePage/><Footer/></>}/> */}
        <Route path='/paymentCardPage' element={<><Card/></>} />
        <Route path='/movieDetails/:imdbID' element={<><Navbar/><MovieDetails/><Footer/></>}/>
        <Route path='/addressPage' element={<><Address/></>}/>
        <Route path='/wishlist' element={<><Navbar/><Wishlist/><Footer/></>}/>
        <Route path='*' element={<><Navbar/><NotFoundPage/></>}/>
      </Routes>
      

    </div>
  );
}

export default App;
