
import React,{useState,useEffect} from 'react';
import './History.css'
import moment from 'moment';
function History(){

    const [data,setData]=useState([])
       
        const getData = async () => {
            try{
              const res = await fetch("http://127.0.0.1:5000/history");
              const result = await res.json();
              setData(result.history)
            }catch(error){
              console.log(error) 
            }
          };
        useEffect(() => {
            getData();
        },[]);
       
        let user=localStorage.getItem("user")
        var users=JSON.parse(user)
    let email=users.email

   function tConvert (time) {
      // Check correct time format and split into components
      time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    
      if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join (''); // return adjusted time or original string
    }
    
    


    
    
    
    return(
        <div>
                
                <div>
                  {/* {data.length>0?<> */}
                      
                    {data.map((item)=><p  key={item.id}>
                        {item.email===email?
                      <div className="container">
	
	<div className="bp-card" data-clickthrough="link">
		<div className="bp-card_label">
			<div className="bd-border_solid"></div>
			<div className="bd-border_dotted"></div>
		</div>
		<div className="bp-card_content">
			<p className="secondary">Movie</p>
			<h4>{item.moviename}</h4>
      <ul>
        <li>
      <p className='secondary'>Seats</p>
      <span>{item.seats}</span>
      </li>
      <li>
      <p className='secondary'>Time</p>
      {tConvert(item.time)}
      </li>
      <li>
      <p className='secondary'>Theatre</p>
      {item.location}
      </li>
</ul>
<ul>
  <li>
<p className='secondary'>Booking date&time</p>
<span>{item.date}</span>
</li>
<li>
<p className='secondary'>Name</p>
<span>{item.name}</span>
</li>
</ul>

			
			<a href="" className="price">
      &#8377;  {item.price}/-
			</a>
      <a href="" className='barcode'>
			</a>
			
      
		</div>
	</div>
	
</div>
                        :null
                    } </p>)}
                    {/* </>:<p>NO purchase History available</p>} */}
                    </div>
            </div>     
        
    );
     }
    export default History;