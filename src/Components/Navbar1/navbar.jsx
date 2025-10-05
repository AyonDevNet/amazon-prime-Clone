import { useRef, useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
// import img1 from "../componants'/cardlogonew.png"
import img1 from "../../Images/cardlogonew.png"
import "./navbar.css"

export const Navbar = () => {
  const [drop, setdrop] = useState(false)

  const changedrop = () => {
    if (drop === false)
      setdrop(true)
    else
      setdrop(false)
  }
  const buttonRef = useRef(null);
  const buttonClickedOutside = useOutsideClick(buttonRef);

  useEffect(() => {
    // if the the click was outside of the button
    // do whatever you want
    if (buttonClickedOutside) {
      setdrop(false)
    }
  }, [buttonClickedOutside]);




  return (
    <div className="navbar">
      <div className="logo">
        <Link to={'/homepage'}><img className="logoimg1" src={img1}></img></Link>
        </div>
      <Link to={'/homepage'} ><div className="Home">Home</div></Link>
      <div className="TVshow">TV Shows</div>
      <div className="Movies">Movies</div>
      <div className="Channels">Channels</div>
      <div className="Categories">Categories </div>
      <div className="searchbar"><span class="material-icons-outlined" style={{ color: "white", margin: "0px 10px" }}>
        search
      </span>
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="user">
        <div className="userlogo">
          <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" style={{ width: "100%" }}></img>
        </div>
        {/* <Link to={'/signUp'} > */}
        <div className="username" onClick={() => { changedrop() }}>
          User...{drop ? <span class="material-icons-outlined">arrow_drop_down</span> : <span class="material-icons-outlined">arrow_drop_up</span>}
        </div>
        {/* </Link> */}
      </div>
      <div className="drop" style={{ display: drop ? "flex" : "none" }}>
        <div className="childdrop" ref={buttonRef}>
          <div>
            <div className="kids1">
              <Link to={'/wishlist'}><div className="droptext1">Your Watchlist</div></Link>
            </div>
            <div className="kids1">
              <div className="droptext1">Account & Settings</div>
            </div>
            <div className="kids1">
              <div className="droptext1">Watch Anywhere</div>
            </div>
            <div className="kids1">
              <div className="droptext1">Help</div>
            </div>
            <div className="kids1">
              <div className="droptext1">Not user?Sign Out</div>
            </div>
          </div>
          <div className="kids">
            <div className="kids1">
              <div className="kidsimg">
                <img className="kidlogo" src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png" width={"30px"}></img>
              </div>
              <div className="droptext">Kids</div>
            </div>
            <div className="kids1">
              <div className="kidsimg">
                <img className="kidlogo" src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png"></img>
              </div>
              <div className="droptext">Add new</div>
            </div>
            <div className="kids1">
              <div className="droptext1">Manage profiles</div>
            </div>
            <div className="kids1">
              <div className="droptext1">Learn More</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
const useOutsideClick = (ref) => {
  const [outsieClick, setOutsideClick] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        setOutsideClick(true);
      } else {
        setOutsideClick(false);
      }

      setOutsideClick(null);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return outsieClick;
};
