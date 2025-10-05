import axios from "axios";
import React, { useEffect, useState } from "react";
import { SiPrimevideo } from "react-icons/si";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SIGNIN = () => {

  const navigate = useNavigate()

  const [SignInForm, setSignInForm] = useState({})

  const handle_SignUpForm_Onchange = (e) => {
    const { value, name } = e.target
    setSignInForm({
      ...SignInForm,
      [name]: value
    })
  }

  const handle_SignUpForm_OnSubmit = (e) => {
    e.preventDefault()
    console.log(SignInForm);
    let SgIndata = JSON.stringify(SignInForm)
    postSignInData(SgIndata)
  }

  const postSignInData = async (SgIndata) => {
    try {

      // let res = await fetch('https://desolate-woodland-56350.herokuapp.com/login', {
      let res = await fetch('https://backend-amazon-prime-2.onrender.com/login', {
        method: 'POST',
        body: SgIndata,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('res:', res)

      let response = await res.json()
      console.log('response:', response)

      console.log('response.user:', response.user)
      console.log('response.user:', response.token)


      if (response.user === undefined) {
        alert('Please try another email or password')
        return
      }

      navigate('/paymentCardPage')
      // navigate('/homepage')


    } catch (error) {
      console.log('error:', error)

    }
  }


  return (
    <>
      <div className="primevideoIcon">
        <SiPrimevideo size={170} />
      </div>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            {/* <img src="./blacklogoamazon.png" alt="signupimg" /> */}
          </div>
          <div className="sign_form">
            <form onSubmit={handle_SignUpForm_OnSubmit}>
              <h1>Sign-In</h1>

              <div className="form_data">
                <label htmlFor="email">Email or mobile phone number</label>
                <input
                  type="email"
                  name="email"

                  id="email"
                  onChange={handle_SignUpForm_Onchange}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"

                  id="password"
                  placeholder="At least 6 characters"
                  onChange={handle_SignUpForm_Onchange}
                />
              </div>
              <input
                type="submit"
                className="signin_btn"
              >

              </input>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New to Amazon?</p>
            <button>
              {" "}
              <Link to="/signUp">Create your Amazon Account</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SIGNIN;
