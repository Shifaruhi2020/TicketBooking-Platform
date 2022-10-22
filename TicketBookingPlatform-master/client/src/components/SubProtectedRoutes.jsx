import React from 'react'
import { Navigate,Outlet } from "react-router-dom";
import { useAlert } from 'react-alert';



const SubProtectedRoutes = () => {

  const alert=useAlert()
    
      const seat_wanted = localStorage.getItem("seats_wanted");
      const user=localStorage.getItem("user");
      const show_id=localStorage.getItem("show_id");
      const theatre_id=localStorage.getItem("theatre_id");
      const movie_id=localStorage.getItem("movie_id");

      if(!user)
      {
          return <Navigate to="/login"/>
      }
      else if (user && !seat_wanted) {
            
        
          alert.show("Please fill all the details",{type:"info"});
          
    
           return <Navigate to="/select"/>
            
 
      }
      else if (user && !theatre_id) {
            
        
        alert.show("Please fill all the details",{type:"info"});
        
  
         return <Navigate to="/select"/>
          

    }
    else if(user && !movie_id){
      
      alert.show("Please fill all the details",{type:"info"});
        
  
      return <Navigate to="/select"/>
    }
    else if (user && !show_id) {
            
        
      alert.show("Please fill all the details",{type:"info"});
      

       return <Navigate to="/select"/>
        

  }

      else if(seat_wanted &&  user ){

        return  <Outlet/>
      }
     
      
}

export default SubProtectedRoutes;