import { Navigate,Outlet } from "react-router-dom";
// import Login from "../Login";
// import Registration from "../Registration";



const useAuth=() =>{
    const res= localStorage.getItem("user")
   
    
    if(res){
    const user ={LoggedIn:true}
    const log=JSON.parse(res)
  
    return user && user.LoggedIn;
    }
    
  
}

const ProtectedRoutes = () =>
{
    const auth=useAuth();

    return auth? <Outlet/>: <Navigate to="/login" /> ;
}

export default ProtectedRoutes;