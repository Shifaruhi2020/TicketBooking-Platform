import { useNavigate } from "react-router-dom";

function Logout(){
    const navigate=useNavigate();
    navigate('/login')
    localStorage.clear();
  
}

export default Logout;