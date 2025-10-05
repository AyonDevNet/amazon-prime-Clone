import { useState } from "react"
// import cardlogo from "./images/cardlogo.png"
import axios from "axios"
import "./card.css"
import { Link } from "react-router-dom"

export const Card=()=>{
 const [data,setdata]=useState(false)
 const [check,subcheck]=useState(false)
 const [form,setform]=useState({
     name:"",
     number:"",
     month:"",
     year:""
 })
    const handlechange=(e)=>{
       setdata(true)
    }
 const handledata=(e)=>{
     const {id,value}=e.target
     setform({...form,[id]:value})
 }
 const handlesubmit=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:8080/users",{
      name:form.name,
      number:form.Cardnumber,
      month:form.month,
      year:form.year
  })
  subcheck(true)
 }
    

   

    return(
       <>
            <div className="top">
            <div className="primelogo">
            {/* <img className="logomain" src={cardlogo}></img> */}
            <h3 className="headw">Watch now, cancel anytime</h3>
            <p className="textw">Start your 30-day free trial</p>
            </div>
            <div className="mirror">
            </div>
            </div>

            <div className="info">
                <p>A Rs.2 refundable transaction is required to verify your card. After the 30-day free trial, your Prime membership will auto-renew with a charge of ₹1,499 a year unless canceled. Cards issued outside India can't be used to purchase Prime memberships.</p>

            </div>
            <div className="pay">
          <h3>Select a payment method</h3>
            </div>
            <div className="payment" style={{height:data?"260.425px":"195.425px"}}>
             <h3>More payment options</h3> 
             <hr></hr>  
             <div className="inside" style={{backgroundColor:data?"#eff0f3":"none",height:data?"197.424px":"",alignContent:'start'}}>
                 <input type="radio"  onChange={(e)=>{handlechange(e)}} className="crl"/><span className="add"><b> &nbsp; Add Debit/Credit/ATM card</b></span>
                 <p className="select">Select credit and debit cards supported</p>
                 <p className="rbi"> You can save your cards as per new RBI guidelines.</p>
                 <div className="cards">
                     <div>
                      <img className="cardimg" src="data:image/png;base64,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"/>   
                     </div>
                     <div>
                        <img className="cardimg" src="https://w7.pngwing.com/pngs/92/785/png-transparent-mastercard-logo-mastercard-credit-card-payment-visa-nyse-ma-mastercard-logo-text-logo-sign.png"/>
                     </div>
                     <div>
                         <img className="cardimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"/>
                     </div>
                     <div>
                         <img className="cardimg" src="data:image/png;base64,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"/>
                     </div>
                     <div>
                         <img className="cardimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/2560px-Maestro_logo.svg.png"/>
                     </div>
                     <div>
                         <img className="cardimg" src="https://bfsi.eletsonline.com/wp-content/uploads/2019/09/RuPay-debit-card.png"/>
                     </div>
                 </div>
                 
                 <div className="inputdiv" style={{display:data?"block":"none"}}>
                 <div className="name">
                 &nbsp; &nbsp;  &nbsp;Name on card  &nbsp; &nbsp; &nbsp;&nbsp;Card Number  &nbsp; &nbsp; &nbsp; &nbsp;Expiration date
                 </div>
                <form  onSubmit={handlesubmit}>
                 
                 <input id="name" onChange={handledata} style={{width:"113px",height:"21px",marginLeft:"20px"}} type="text"></input>
                 <input id="Cardnumber" onChange={handledata} type="number"   style={{width:"113px",height:"21px",marginLeft:"10px"}}></input>
                 <select className="datecard" onChange={handledata} id="month" >
                    <option value="">01</option>
                    <option value="">02</option>
                    <option value="">03</option>
                    <option value="">04</option>
                    <option value="">05</option>
                    <option value="">06</option>
                    <option value="">07</option>
                    <option value="">08</option>
                    <option value="">09</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                 </select>
                 <select className="monthcard"  id="year" onChange={handledata}  >
                     <option value="">2022</option>
                     <option value="">2023</option>
                     <option value="">2024</option>
                     <option value="">2025</option>
                     <option value="">2026</option>
                     <option value="">2027</option>
                     <option value="">2028</option>
                     <option value="">2029</option>
                     <option value="">2030</option>
                     <option value="">2031</option>
                 </select>
                 <input   type="submit" className="sub" style={{backgroundColor:check?"green":"#1196AB"}} value={check?"Added":"Add you card"}></input>
                 </form>
                 </div>
                </div>

             
            </div>
            <div className="conti">
            <Link to={`/addressPage`} >
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