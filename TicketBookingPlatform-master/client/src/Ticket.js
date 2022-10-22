import React from 'react'
import {  useNavigate } from 'react-router-dom';
import './ticket.css'
import moment from 'moment';
 function Ticket() {
const navigate=useNavigate();
 let seats=localStorage.getItem("seats_wanted")
 let movie=localStorage.getItem("movie_name")
 let user=localStorage.getItem("user")
 var users=JSON.parse(user)
let name=users.name
let price=localStorage.getItem("price")
const res=localStorage.getItem("cart")
let cart=JSON.parse(res)
var location=localStorage.getItem("theatre_name")
var resdate=localStorage.getItem("dateselected")
let date=moment(resdate).format('MMMM Do, YYYY')
let movies=[]
    for(var j=0;j<cart.length;j++){
      movies[j]=cart[j].name
    }

// let time =localStorage.getItem("show_time")

    const tConvert =(time)=> {
      // Check correct time format and split into components
      time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    
      if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join (''); // return adjusted time or original string
    }





function printDiv() 
{
 
 var printContents = document.getElementById("print").innerHTML;
 var originalContents = document.body.innerHTML;
 document.body.innerHTML = printContents;
 window.print();
 document.body.innerHTML = originalContents;
}
  return (
    <>
<div  className="contenido" id="print" >
  <div className="ticket">
    <div className="hqr">
      <div className="column left-one"></div>
      <div className="column center">
        <div id="qrcode"></div>
      </div>
      <div className="column right-one"></div>
    </div>
    <center>
    <div className='header'>Ticket Booking</div>
    </center>
    </div>
    <div className="details">
      <div className="tinfo">
       Movie Name
      </div>
      <div className="tdata name">
        {movie}
      </div>
      
       <div className="tinfo">
       Number of Tickets:
      </div>
      <div className="tdata name">
       <span>{seats}</span> 
      </div>
      <div className="tinfo">
       Seats
      </div>
      <div className="tdata name">
       {movies.toString()}
      </div>
        
      <div className="tinfo">
        Price
      </div>
      
      <div className="tdata">
        <b>Rs:{price}</b>
        
      </div>    
      <div className="tinfo">
        Date
      </div>
      <div className="tdata">
        {date}
      </div>  
      <div className="tinfo">
        Time
      </div>
      <div className="tdata">
        {tConvert(localStorage.getItem("show_time"))}
      </div>  
      
      <div className="masinfo">
        <div className="left">
         <div className="tinfo">
        User
      </div>
      <div className="tdata nesp">
        {name}
      </div>  
        </div>
        <div className="right">
        <div className="tinfo">
        location
      </div>
      <div className="tdata nesp">
        {location}
      </div> 
        </div>
        <div className="link">
        {/* <button onClick={printDiv}>PRINT</button> */}
      </div>
      
      </div>
     
    </div>
    
  </div>



 <div className="link">
       <button className='route' onClick={printDiv}>PRINT</button>
      </div>

  
  
</>
);
}

export default Ticket;