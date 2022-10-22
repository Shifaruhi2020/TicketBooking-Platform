import React from 'react';
import "./Home.css";
import img6 from "./assets/img6.jpeg";
import { Link,useNavigate } from 'react-router-dom';





const Home = () => {
  return (
    <div className='main-cont'>
      
  
    <div className="bg-text">
    <ul className="slideshow">
	<li><span></span></li>
  <li><span>2</span></li>
	<li><span></span></li>
	<li><span></span></li>
    
</ul>
    
    <div className='centered'> 
     <p className='title'> <span className="title-word title-word-1">Book </span>
    <span className="title-word title-word-2">movie </span>
    <span className="title-word title-word-3">Ticket </span>
    <br></br>
    <span className="title-word title-word-4">and enjoy!</span><br/> <br/> <Link className='book-btn ' to="/main">Book now </Link> </p>
    </div>
    
  
    </div>
   
    </div>
    
  );
};

export default Home;