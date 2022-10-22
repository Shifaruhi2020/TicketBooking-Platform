
// import {React, useState, useEffect} from 'react';
//   import { useNavigate } from 'react-router';
//   import './main1.css'
//   import { Link } from 'react-router-dom';
//   import {useAlert} from 'react-alert'
//   import moment from 'moment';
//   export default function Main1(){
//     const alert=useAlert();
//     const navigate=useNavigate();
//       const [moviesList,setMovieslist]=useState([])
//       const [selected,setSelected]=useState([])
//       const [select,setSelect]=useState([]);
  
//       var ShowList=localStorage.getItem("ShowList")
//       var id=localStorage.getItem("movie_id")
//       const getData = async () => {
//           try{
//             const res= await fetch(`http://127.0.0.1:5000/movies/${id}`);
//             const data=await res.json();
//             setMovieslist(data.movies)
//             console.log(moviesList)
//           }catch(error){
//             console.log(error) 
//           }
//         };
        
//   useEffect(() => {
//       getData()
//     }, []);
    
    

//     const back=()=>{
      
//       localStorage.removeItem("movie_name")
//       localStorage.removeItem("movie_id")
//       localStorage.removeItem("show_time")
//       localStorage.removeItem("show_id")
//       localStorage.removeItem("main")
//       localStorage.removeItem("theatre_name")
//       localStorage.removeItem("theatre_id")
//       localStorage.removeItem("seats_wanted")
    
//       localStorage.removeItem("seatsSelected")
//       localStorage.removeItem("dateselected")
//       localStorage.removeItem("datetimeselected")
//       localStorage.removeItem("showlist") 
//     }
//     var seats="ok"
//     localStorage.setItem("main",seats)


  
//   window.onbeforeunload = function(){
//     var check=localStorage.getItem("main")
//     if(check){
//     localStorage.removeItem("show_time")
//     localStorage.removeItem("show_id") 
//     localStorage.removeItem("theatre_name")
//     localStorage.removeItem("theatre_id") 
//     localStorage.removeItem("seats_wanted")
//     }

//   }

//   const handle=async()=>{

//     const show_id=localStorage.getItem("show_id");
//     const theatre_id=localStorage.getItem("theatre_id");
//     const seatwanted=localStorage.getItem("seats_wanted")

//     if(show_id && theatre_id && seatwanted){
      
//        var result=0;
//     const movie=localStorage.getItem('movie_id')
//     const show=localStorage.getItem("show_id")
//     const res = await fetch("http://127.0.0.1:5000/seats/movieId/"+movie+"/showId/"+show)
//     const data = await res.json();
//     console.log(data)
   
//     const seats_res=data.seats
//     console.log(data.seats)

// let seat_unoccupied = seats_res.filter(item => item.occupied ===false);
// console.log(seat_unoccupied)
// console.log(seat_unoccupied.length)


// console.log(result)



// console.log(seat_unoccupied.length)
//   console.log(localStorage.getItem("seats_wanted"))
//   localStorage.setItem("no.ofseats",seat_unoccupied.length)
//  if(seat_unoccupied.length===0){
//     alert.show("Seats are full ", { type: "info" });
//  }
//   else if(seat_unoccupied.length<localStorage.getItem("seats_wanted")){
//     alert.show(`Seats Available :  ${seat_unoccupied.length }`, { type: "info" });
//   }
//     else if(seat_unoccupied.length>=localStorage.getItem("seats_wanted")){
//   localStorage.removeItem("main")
//   setTimeout(function(){
//     navigate("/seats")
// }, 1000)
//     }

//     }
//     else{
      
//       alert.show(" please fill all the details", { type: "info" });
//     }
//   }     

//     const handleChange=(event) =>{
      
//       let seat=event.target.value;
//       localStorage.setItem('seats_wanted',seat)   
//     }
  
//     const tConvert =(time)=> {
//       // Check correct time format and split into components
//       time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    
//       if (time.length > 1) { // If time format correct
//         time = time.slice (1);  // Remove full string match value
//         time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
//         time[0] = +time[0] % 12 || 12; // Adjust hours
//       }
//       return time.join (''); // return adjusted time or original string
//     }
    
//     let shows =ShowList;
//         if(localStorage.getItem("showlist") &&localStorage.getItem("showlist").length!==0 ){
//           shows=JSON.parse(localStorage.getItem("showlist"))
//         }
//         let newshows=[]
//         for(let i=0;i<shows.length;i++){
//           newshows[i]=shows[i]
//         }
      
//         let dups=new Set()
//         for(let i=0;i<newshows.length;i++){
//           let show=newshows[i]
          
//           if(dups.has(show.theatre_name)){
//             newshows.splice(i,1)
//           }
//           dups.add(show.theatre_name)
//         }
    
        
//         let optiontheatre = newshows.map((show) =>
//                 <option value={JSON.stringify(show)}>{show.theatre_name}</option>
//             );
    
                
          
//         let optiontime = shows.filter((show) => show.theatre_id===selected).map((show) =>
//                               <option value={JSON.stringify(show)}>{tConvert(show.time)}</option>
//                           );  

// let ds=localStorage.getItem("dateselected")
// let date=moment(ds).format('MMMM Do, YYYY')

//   const handleTheatre=(event) =>{
//       let show=JSON.parse(event.target.value);
//       let theatrename=show.theatre_name;
//       let theatreid = show.theatre_id;
//       setSelected(theatreid)
//       localStorage.setItem('theatre_name',theatrename)
//       localStorage.setItem('theatre_id',theatreid) 
//       // localStorage.removeItem("show_time")
//       // localStorage.removeItem("show_id") 
//       setSelect([])
      
//     }
    
    
    
//     const handleTime=(event)=> { 
//       let show=JSON.parse(event.target.value);
//       let showtime=show.time;
//       let showid = show.id;
     
//       localStorage.setItem('show_time',showtime)
//       localStorage.setItem('show_id',showid)  
//       setSelect(show) 
//     }

//     return(
//         <>
//         <div className='body'>
//       <div className="card-box">
//       <div className="card-box-header">
//         <img src={moviesList.img} className="card-img-top" alt={moviesList.name}/>
//       </div>
//       <div className="card-box-content">
//       <h4>{moviesList.name}</h4> <p className='date'>{date}</p>
      
      
//         <span className="theat">Theatre
//                 <select  onChange={handleTheatre} >
//                 <option value="">Select Theatre</option>
//                   {optiontheatre} 
//                 </select>
//                 </span>
//                 <br/>
//                 <span className="timer">Time
//                 <select value={select} onChange={handleTime} >
//                 <option value="" >Select Time</option>
//                   {optiontime} 
//                 </select>
//                 </span>
//                 <br/>

//                 <span className='dates1'>Seats
//                   <input type="number" max={5} min={1} onChange={handleChange}
//                   placeholder="Choose Seats" />
//                 </span>
    

//         <div className="card-box-content-action">
//           <div className="circle-btn">
//             <Link className="but-90" to="/main" onClick={back}>Back</Link>
//           </div>

//   <br/>
//   <div className="circle-btn2">
//             <Link className='but-90' to="/select" onClick={handle}>Next</Link>
//           </div> 


                  
        
//         </div>
        
//       </div>
    
//     </div>
    
//   <div>

      
//   </div>
    
//       </div>
    

//       </>
//     );

//   }

import {React, useState, useEffect} from 'react';
  import { useNavigate } from 'react-router';
  import './main1.css'
  import moment from 'moment';

  import { Link } from 'react-router-dom';
  import {useAlert} from 'react-alert'
  export default function Main1(){
    const alert=useAlert();
    const navigate=useNavigate();
      const [moviesList,setMovieslist]=useState([])
      const [selected,setSelected]=useState([])
      const[select,setSelect]=useState("")
      var ShowList=localStorage.getItem("ShowList")
      var id=localStorage.getItem("movie_id")
      const getData = async () => {
          try{
            const res= await fetch(`http://127.0.0.1:5000/movies/${id}`);
            const data=await res.json();
            setMovieslist(data.movies)
            console.log(moviesList)
          }catch(error){
            console.log(error) 
          }
        };
        
  useEffect(() => {
      getData()
    }, []);
    
    

    const back=()=>{
      
      localStorage.removeItem("movie_name")
      localStorage.removeItem("movie_id")
      localStorage.removeItem("show_time")
      localStorage.removeItem("show_id")
      localStorage.removeItem("main")
      localStorage.removeItem("theatre_name")
      localStorage.removeItem("theatre_id")
      localStorage.removeItem("seats_wanted")
    
      localStorage.removeItem("seatsSelected")
      localStorage.removeItem("dateselected")
      localStorage.removeItem("datetimeselected")
      localStorage.removeItem("showlist") 
    }
    var seats="ok"
    localStorage.setItem("main",seats)


  
  window.onbeforeunload = function(){
    var check=localStorage.getItem("main")
    if(check){
    localStorage.removeItem("show_time")
    localStorage.removeItem("show_id") 
    localStorage.removeItem("theatre_name")
    localStorage.removeItem("theatre_id") 
    localStorage.removeItem("seats_wanted")
    }

  }

  const handle=async()=>{

    const show_id=localStorage.getItem("show_id");
    const theatre_id=localStorage.getItem("theatre_id");
    const seatwanted=localStorage.getItem("seats_wanted")

    if(show_id && theatre_id && seatwanted){
      
       var result=0;
    const movie=localStorage.getItem('movie_id')
    const show=localStorage.getItem("show_id")
    const res = await fetch("http://127.0.0.1:5000/seats/movieId/"+movie+"/showId/"+show)
    const data = await res.json();
    console.log(data)
   
    const seats_res=data.seats
    console.log(data.seats)

let seat_unoccupied = seats_res.filter(item => item.occupied ===false);
console.log(seat_unoccupied)
console.log(seat_unoccupied.length)


console.log(result)



console.log(seat_unoccupied.length)
  console.log(localStorage.getItem("seats_wanted"))
 if(seat_unoccupied.length===0){
    alert.show("Seats are full ", { type: "info" });
 }
  else if(seat_unoccupied.length<localStorage.getItem("seats_wanted")){
    alert.show(`Seats Available:${seat_unoccupied.length }`, { type: "info" });
  }
    else if(seat_unoccupied.length>=localStorage.getItem("seats_wanted")){
  localStorage.removeItem("main")
  setTimeout(function(){
    navigate("/seats")
}, 1000)
    }

    }
    else{
      
      alert.show(" please fill all the details", { type: "info" });
    }
  }     

    const handleChange=(event) =>{
      
      let seat=event.target.value;
      localStorage.setItem('seats_wanted',seat)   
    }
  
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
    
    let shows =ShowList;
        if(localStorage.getItem("showlist") &&localStorage.getItem("showlist").length!==0 ){
          shows=JSON.parse(localStorage.getItem("showlist"))
        }
        let newshows=[]
        for(let i=0;i<shows.length;i++){
          newshows[i]=shows[i]
        }
      
        let dups=new Set()
        for(let i=0;i<newshows.length;i++){
          let show=newshows[i]
          
          if(dups.has(show.theatre_name)){
            newshows.splice(i,1)
          }
          dups.add(show.theatre_name)
        }
    
        
        let optiontheatre = newshows.map((show) =>
                <option value={JSON.stringify(show)}>{show.theatre_name}</option>
            );
    
                
          
        let optiontime = shows.filter((show) => show.theatre_id===selected).map((show) =>
                              <option value={JSON.stringify(show)}>{tConvert(show.time)}</option>
                          );  

  let ds=localStorage.getItem("dateselected")
let date=moment(ds).format('MMMM Do, YYYY')

  const handleTheatre=(event) =>{
      let show=JSON.parse(event.target.value);
      let theatrename=show.theatre_name;
      let theatreid = show.theatre_id;
      setSelected(theatreid)
      localStorage.setItem('theatre_name',theatrename)
      localStorage.setItem('theatre_id',theatreid) 
      localStorage.removeItem("show_time")
    localStorage.removeItem("show_id")   
    setSelect("") 
    }
    
    
    
    const handleTime=(event)=> { 
      let show=JSON.parse(event.target.value);
      let showtime=show.time;
      let showid = show.id;
      setSelect(event.target.value)
      localStorage.setItem('show_time',showtime)
      localStorage.setItem('show_id',showid)   
    }

    return(
        <>
        <div className='body'>
      <div className="card-box">
      <div className="card-box-header">
        <img src={moviesList.img} className="card-img-top" alt={moviesList.name}/>
      </div>
      <div className="card-box-content">
      <h4>{moviesList.name}</h4> <p className='date'>{date}</p>
      
      
        <span className="theat">Theatre
                <select  onChange={handleTheatre} >
                <option value="">Select Theatre</option>
                  {optiontheatre} 
                </select>
                </span>
                <br/>
                <span className="timer">Time
                <select value={select} onChange={handleTime} >
                <option value="">Select Time</option>
                  {optiontime} 
                </select>
                </span>
                <br/>

                <span className='dates1'>Seats
                  <input type="number" max={5} min={0} onChange={handleChange}
                  placeholder="Choose Seats" />
                </span>
    

        <div className="card-box-content-action">
          <div className="circle-btn">
            <Link className="but-90" to="/main" onClick={back}>Back</Link>
          </div>

  <br/>
  <div className="circle-btn2">
            <Link className='but-90' to="/select" onClick={handle}>Next</Link>
          </div> 


                  
        
        </div>
        
      </div>
    
    </div>
    
  <div>

      
  </div>
    
      </div>
    

      </>
    );

  }