import { useState } from "react"
import cardlogo from "../../Images/black-prime-logo.jpeg"
import axios from "axios"
import "./add.css"
import { Link } from "react-router-dom"

export const Address=()=>{

 const [check,subcheck]=useState(false)
 const [form,setform]=useState({
     name:"",
      mobile:"",
     Zip:"",
     address1:"",
     address2:"",
     city:"",
     state:""
 })
  
 const handledata=(e)=>{
     const {className,value}=e.target
     setform({...form,[className]:value})
 }
 const handlesubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:8080/users",{
      name:form.fullname,
      mobile:form.mobile,
      Zip:form.zip,
      address1:form.address1,
    address2:form.address2,
    city:form.city,
    state:form.state

  })
 
 }
    

   

    return(
       <>
            <div className="top">
            <div className="primelogo">
            {/* <img className="logomain"  src={cardlogo} sizes={'10px'}></img> */}
            <h3 className="headw">Watch now, cancel anytime</h3>
            <p className="textw">Start your 30-day free trial</p>
            </div>
            <div className="mirror">
            </div>
            </div>

            <div className="info">
                <p>A Rs.2 refundable transaction is required to verify your card. After the 30-day free trial, your Prime membership will auto-renew with a charge of ₹1,499 a year unless canceled. Cards issued outside India can't be used to purchase Prime memberships.</p>

            </div>
            <p className="addhead">Add a billing address</p>
            <div className="inputdiv2">
                <form onSubmit={handlesubmit}>
               <label>Full Name</label><br></br>
               <input onChange={handledata} className="fullname" type="text" ></input><br></br> 
               <label>Phone number</label><br></br>
               <input onChange={handledata} className="mobile" type="number" ></input> <br></br>
               <label>ZIP Code</label><br></br>
               <input onChange={handledata} className="zip" type="number" ></input>  <br></br>
               <label>Address Line 1</label><br></br>
               <input onChange={handledata} className="address1" type="text" ></input> <br></br> 
               <label>Line2</label><br></br>
               <input onChange={handledata} className="address2" type="text" ></input>  <br></br>
               <label>City</label><br></br>
               <input onChange={handledata} className="city" type="text" ></input>  <br></br>
               <label>State</label><br></br>
               <input onChange={handledata} className="state" type="text" ></input> <br></br>
               <input className="submit" type="submit" value="Use this address"></input> 
               </form>

            </div>
            <div className="conti">
            <Link to={'/homepage'} >
            <button className="continue">Continue</button>
            </Link>
             <br></br> 
            --------------Or---------------  
            <div className="end">
            Skip the free trial and buy a Prime membership without auto-renew. (All electronic payment methods eligible)
            </div>
             </div>
            </>
    )
}