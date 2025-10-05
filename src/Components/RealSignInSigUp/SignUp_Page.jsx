import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import { SiPrimevideo } from 'react-icons/si'
import './SignIn_SignUp.css'


const SignUp_Page = () => {

    const navigate = useNavigate()
    // useEffect(() => {

    // },[])

    const [SignUpForm, setSignUpForm] = useState({})

    const handle_SignUpForm_Onchange = (e) => {
        const { value, name } = e.target
        // console.log('value,name:', value,name)
        setSignUpForm({
            ...SignUpForm,
            [name]: value
        })
    }

    const handle_SignUpForm_OnSubmit = (e) => {
        e.preventDefault()
        let ddata = JSON.stringify(SignUpForm)
        postSignUpData(ddata)
        // console.log(SignUpForm);
    }
    // console.log('SignUpForm:', SignUpForm)

    const postSignUpData = async (ddata) => {


        try {
            console.log('ASD:', ddata)
            // let res = await axios.post('http://localhost:4040/register',ddata)
            // let res = await fetch('http://localhost:4040/register', {
            // let res = await fetch('https://desolate-woodland-56350.herokuapp.com/register', {
            let res = await fetch('https://backend-amazon-prime-2.onrender.com/register', {

                method: 'POST',
                body: ddata,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log('res:', res)
            let response = await res.json()
            // console.log('response:', response)
            // console.log('response.user:', response.user)
            // console.log('response.user:', response.token)


            if (response.user === undefined) {
                alert('Please try another email')
                return
            }

            let User_token = response.token;
            localStorage.setItem('User_token', JSON.stringify(User_token))

            alert(`${SignUpForm.name} your account has been created`)

            // if(response.user){
            //     return <Navigate to={`/signIn`} />
            // }
            navigate('/signIn')
        }


        catch (error) {
            console.log('error:', error)

        }

    }
    // const postSignUpData = (ASD) => {
    //     console.log('ASD:', ASD)
    //     axios.post(`http://localhost:4040/register`,ASD).then(() =>{
    //         // console.log(res);
    //     }).catch((e) => {
    //         console.log(`error in postSignUpData function `);
    //     })
    // }

    return (
        <>
            <SiPrimevideo size={200} />
            <div className='SignUp-Main_div'>
                <h2>Create Account</h2>
                <form onSubmit={handle_SignUpForm_OnSubmit}>
                    <label htmlFor="">Your name</label><br />
                    <input type="text" name="name" id="" onChange={handle_SignUpForm_Onchange} width='10px' /><br />
                    <label htmlFor="">Email</label><br />
                    <input type="email" name="email" id="" onChange={handle_SignUpForm_Onchange} width='10px' /><br />
                    <label htmlFor="">Password</label><br />
                    <input type="password" name="password" id="" onChange={handle_SignUpForm_Onchange} width='10px' /><br />
                    <label htmlFor="">Re-enter password</label><br />
                    <input type="password" name="" id="" /><br />
                    <input type="submit" value={'Create Your Amazon Account'} className={'SignUp-Submit-Button'} />
                </form>
                <div className="signin_info">
                    <p>Already have an account?<Link to="/signIn">Sign in</Link></p>

                </div>
            </div>
        </>
    )
}

export default SignUp_Page
