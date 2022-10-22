import React,{useState} from 'react'
import {  Alert } from "react-bootstrap";
import { Link,useNavigate } from 'react-router-dom';
import './login.css'
function Registration() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setusername] = useState();
  

  const navigate=useNavigate();
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !username ) {
      setFlag(true);
    
    } else {
      setFlag(false);
      setLogin(!login);   
  }

     let data={name,username,email,password}
     try{
       let result=await fetch('http://127.0.0.1:5000/register/',{
         method:'POST',
         headers:{
           'Accept':'application/json',
           'Content-type':'application/json',
         },
         body:JSON.stringify(data)  
       });

      result =await result.json();
      localStorage.setItem("user",JSON.stringify(result.user))  
       console.log(result)
     } catch(e){
       console.log(e)
     }

     navigate("/main");  
      window.location.reload(true);
     
  }

  return (
    <>
        
         <div className="login-box">
   <div className="popup">
  <div className="popup-image">
    <img src="https://turkce-sozluk.com/api/src/astronot.jpg" alt="Login page image"/>
  </div>
    
        <form className="signinForm" onSubmit={handleFormSubmit}>
        
          
        <input
                  type="text"
                  value={name}
                  required
                  placeholder="Enter Full Name"
                  name="name"
                  className='login-input'
                  onChange={(event) => setName(event.target.value)}
                />
           <input
                  type="text"
                  required
                  className='login-input'
                  placeholder="Enter username"
                  onChange={(event) => setusername(event.target.value)}
                />
                <input
                  type="email"
                  value={email}
                  required
                  className='login-input'
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              
              <input
                  type="password"
                  value={password}
                  className="login-input"
                  // value={password}
                  placeholder="Enter password" required
                  onChange={(event) => setPassword(event.target.value)}
                />
          
            {/* <input
            className="login-input"
              type="password"
              placeholder="Enter password"
              required
              onChange={(event) => setPasswordlog(event.target.value)}
            /> */}
          <button className="login-btn">Sign up</button>
          <div className="options">
      <div>Already Have account? <Link className="link" to="/login">Login</Link></div>
      </div>
          {/* <Link to="/register">Don't Have an account?</Link> */}
          
      </form>
      
    </div>
    </div>
  
    
    </>
  );
}

export default Registration;