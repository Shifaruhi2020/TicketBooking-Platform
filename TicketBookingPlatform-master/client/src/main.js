
  import {React, useState, useEffect} from 'react';
  import { Link } from 'react-router-dom';
  import './main.css'
  import avt from './assets/avatarimg.jpeg'
  import maj from './assets/majorimg.jpg'
  
  import ReactDatePicker from 'react-datepicker';
  import "react-datepicker/dist/react-datepicker.css";
  import addDays from 'date-fns/addDays'  
  import moment from 'moment';
  import {useAlert} from 'react-alert'
  
  
  function Main(){
  
        const [moviesList,setMovieslist]=useState([])
        const [ShowList,setShowlist]=useState([])
     
       const[dateselected,setDateSelected]=useState([])
   
       const [selectedmovieid,setSelectedmovieid]=useState([])
    
    
  const alert=useAlert();
  
  
    
  const setMovid=(item)=>{
   
    localStorage.setItem('movie_id',item.id);
    localStorage.setItem('movie_name', item.name);
    setSelectedmovieid(item.id)
    localStorage.removeItem("dateselected")
    localStorage.removeItem("datetimeselected")
    localStorage.removeItem("showlist")
  }
  
  
  async function onFormSubmit(datetimefront) {  
   
    var dateselected_str=moment(datetimefront).format('YYYY-MM-DD')
        setDateSelected(new Date(dateselected_str))
        localStorage.setItem("dateselected",dateselected_str)
   
        var current_date= moment().format("YYYY-MM-DD")
  
    // checking for date and time 
    // if current date then time should be current time
    let timeselected=""
    if(current_date===dateselected_str){
       timeselected=moment().format("HH:mm:ss")
      console.log(timeselected)
    }
    // if not current date then time should start 00:00:00
  
    else{
       timeselected='00:00:00'
      console.log(timeselected)
    }
  
    const datetimeselected=dateselected_str.concat(" ",timeselected)
    console.log(datetimeselected)
    localStorage.setItem("datetimeselected",datetimeselected)
    
  
    const movieid=localStorage.getItem('movie_id')
    
    const res3=await fetch("http://127.0.0.1:5000/show/movieID/"+movieid+"/date/"+datetimeselected);
    console.log(res3)
    const data3=await res3.json();
  
      setShowlist(data3.show)
  
  localStorage.setItem("showlist",JSON.stringify(data3.show));    
  
    
  } 
  
  
  
  const getData = async () => {
    try{
      const res= await fetch("http://127.0.0.1:5000/movies");
      const data=await res.json();
      setMovieslist(data.movies)
    }catch(error){
      console.log(error) 
    }
  };
         
  
  useEffect(() => {
   getData()
    
  }, [dateselected]);
  
  
  
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
    
        
      
  
  let mid= localStorage.getItem("movie_id")
  let ds=localStorage.getItem("dateselected")
  
  const handle=()=>{
    localStorage.removeItem("mp")
    
  }
  
  var mp="yes"
  localStorage.setItem("mp",mp)
  
  window.onbeforeunload = function(){
    var mp1=localStorage.getItem("mp")
    if(mp1){
    localStorage.removeItem("cart")
    localStorage.removeItem("movie_name")
    localStorage.removeItem("movie_id")
    localStorage.removeItem("show_time")
    localStorage.removeItem("show_id")
    localStorage.removeItem("confirm")
    localStorage.removeItem("theatre_name")
    localStorage.removeItem("theatre_id")
    localStorage.removeItem("seats_wanted")
    localStorage.removeItem("price")
    localStorage.removeItem("seatsSelected")
    localStorage.removeItem("dateselected")
    localStorage.removeItem("datetimeselected")
    localStorage.removeItem("showlist") 
    localStorage.removeItem("mp")
    }
  
  }
  
  const showalert=()=>{
    alert.show("No Theatre available ", { type: "info" });
    // localStorage.removeItem("movie_name")
    // localStorage.removeItem("movie_id")
    // localStorage.removeItem("show_time")
    // localStorage.removeItem("show_id")
    // localStorage.removeItem("theatre_name")
    // localStorage.removeItem("theatre_id")
    // localStorage.removeItem("dateselected")
    // localStorage.removeItem("datetimeselected")
    // localStorage.removeItem("showlist") 
    // setDateSelected([])
  }
  
        return (
        <>
           
            <div className='book'>
              <div className='movieselect'>
  
  
                
            <div className='row-des'>
  
                {moviesList.map((movie) => {
                 
                  return(
                   
                    <div className="col-des"> 
  
  
                   <div onClick={() => setMovid(movie)}  >
                    <img src={movie.img} className="card-img-top" alt={movie.name} style={{ border: mid && (movie.id === selectedmovieid )? '5px solid red' : 'none'}}/>
                 
                    <p className='movname-des'>{movie.name}</p>
                    </div>
                    </div>
  
                    
                  );
                })}
  
            </div>
               
                  </div>
             
              
               <br/>
               
  
  
        
  
     <div  className='form-des'  > 
     
      { mid ?
      <>
        <p  className='form-group'>  
        
            Please Select Date
  
                <ReactDatePicker 
                  selected={localStorage.getItem("dateselected")
                     ? new Date(localStorage.getItem("dateselected"))
                     : null}
                onChange={onFormSubmit}
                autoComplete="off"
                name="selectedDate"
                placeholderText='Enter Date'
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                maxDate={addDays(new Date(), 2)} 
                /> 
          </p>  
  </>: null }
  
  
   </div> 
           
     
  
    
     <center>
       
  {ds?<>
  {ShowList.length>0?<>
      <Link className='sub-btn' onClick={handle}        
       to={{
         pathname: '/select',
         }}> Next
      </Link>
      </>:<><button className='sub-btn' onClick={showalert}>Next</button></>}
      </>:null}
      </center>

     </div>
      
        </>
        );
      
    }      
      
    export default Main;










