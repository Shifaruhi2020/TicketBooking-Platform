import React from 'react';
import { Navigate,Outlet } from "react-router-dom";

function Protectedroutes1() {
    const seatsSelected = localStorage.getItem("seatsSelected");
    const seats_wanted = localStorage.getItem("seats_wanted");
    const user = localStorage.getItem("user");
    console.log(seatsSelected);
    console.log(seats_wanted);

    

    if (!user) {
        return <Navigate to="/login" />;
    }
    else if (user && !seats_wanted) {
        
       
        return <Navigate to="/main" />
     
    }
    else if (seatsSelected === seats_wanted && user) {
        return <Outlet />;
    }
    else {

        return <Navigate to="/main" />;
    }

}

export default Protectedroutes1