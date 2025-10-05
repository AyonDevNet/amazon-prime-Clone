import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import img1 from "../../Images/logo_for_landing.png"
import "./navforlanding.css"

export const NavbarForLanding = () => {
  const [drop, setdrop] = useState(false)
  const [drop2, setdrop2] = useState(false)

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


  const changedrop2 = () => {
    if (drop2 === false)
      setdrop2(true)
    else
      setdrop2(false)
  }
  const buttonRef2 = useRef(null);
  const buttonClickedOutside2 = useOutsideClick2(buttonRef);

  useEffect(() => {
    // if the the click was outside of the button
    // do whatever you want
    if (buttonClickedOutside2) {
      setdrop2(false)
    }
  }, [buttonClickedOutside2]);





  return (
    <div className="landing-navbar">
      <div className="landing-logo">
        <img src={img1} height={'100%'}></img></div>
      <div className="landing-lang">
        <div className="langlogo">
          <span style={{ color: "white", fontSize: "30px", marginTop: "4px" }} class="material-icons-outlined">language</span>
        </div>
        <div onClick={() => { changedrop() }} className="langtext">
          EN{drop ? <span class="material-icons-outlined">arrow_drop_down</span> : <span class="material-icons-outlined">arrow_drop_up</span>}
        </div>
      </div>
      <div className="landing-user">
        <div className="landing-userlogo">
          <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" style={{ width: "100%" }}></img>
        </div>
        <div className="username" onClick={() => { changedrop2() }}>
          <Link to={'/signUp'}>
            <span style={{color:'white',display:'inline-flex',justifyContent:'space-around'}}>Sign In</span>
            </Link>
          {drop2 ? <span class="material-icons-outlined">arrow_drop_down</span> : <span class="material-icons-outlined">arrow_drop_up</span>}
        </div>
      </div>
      <div className="drop2" style={{ display: drop ? "flex" : "none" }}>
        <div className="childdrop2" ref={buttonRef}>
          <div className="childmain1">
            <div className="kid2">
              <div className="droptext2">Bahasa Indonesia</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Bahasa Melayu</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>

          </div>
          <div className="childmain2">
            <div className="kid2">
              <div className="droptext2">Bahasa Indonesia</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Bahasa Melayu</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>

          </div>
          <div className="childmain3">
            <div className="kid2">
              <div className="droptext2">Bahasa Indonesia</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Bahasa Melayu</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>
            <div className="kid2">
              <div className="droptext2">Manage profiles</div>
            </div>

          </div>
        </div>
      </div>

      <div className="drop" style={{ display: drop2 ? "flex" : "none" }}>
        <div className="childdrop" ref={buttonRef2}>
          <div>
            <div className="kids1">
              <div className="droptext1">Your Watchlist</div>
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
                <img className="kidlogo" src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/kid-1.png" ></img>
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
const useOutsideClick2 = (ref) => {
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
