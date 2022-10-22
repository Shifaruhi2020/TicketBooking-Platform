import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import { useAlert } from "react-alert";
import "./login.css"
function Login() {
    const [email, setEmaillog] = useState(" ");
    const [password, setPasswordlog] = useState(" ");
  

    const navigate=useNavigate();
    const alert = useAlert(); 
    
  
    async function handleLogin(e) {
      e.preventDefault();

  
      let data={email,password}
      try{
        let result=await fetch('http://127.0.0.1:5000/login/',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
          },
          body:JSON.stringify(data)  
         
        });
       result =await result.json();

      if((await result).status ===400)
        {
          alert.show(result.message, { type: "error" });
          
        }
        else{
          alert.show("Logged-In Success", { type: "success" });
          navigate("/")
          localStorage.setItem("user",JSON.stringify(result.user))  
          window.location.reload(true);
        } 
      }
  
        
      catch(e){
        console.log(e)
      }
  }
  return (
   <>
   <div className="login-box">
   <div className="popup">
  <div className="popup-image">
    <img src="https://turkce-sozluk.com/api/src/astronot.jpg" alt="Login page image"/>
  </div>
    
        <form className="signinForm" onSubmit={handleLogin}>
        <h1 className="title">LOGIN</h1>
          
            <input
            className="login-input"
              type="email"
              placeholder="Enter email"
              required
              onChange={(event) => setEmaillog(event.target.value)}
            />
          

          
            <input
            className="login-input"
              type="password"
              placeholder="Enter password"
              required
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          <button className="login-btn">Sign in</button>
          <div className="options">
      <div>New Here? <Link className="link" to="/register">Register</Link ></div>
      </div>
          {/* <Link to="/register">Don't Have an account?</Link> */}
          
      </form>
      
    </div>
    </div>
   
    </>
  );
}


export default Login;