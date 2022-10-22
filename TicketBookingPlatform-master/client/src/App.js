// import React from 'react'

// import './App.css';
// import Confirmation from './confirmation';
// import Main from './main';
// import Seats from './seats';
// import Registration from './register';
// import Login from './login';
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Navbar from './components/Header';
// import ProtectedRoutes from './components/ProtectedRoutes';
// import SubProtectedRoutes from './components/SubProtectedRoutes';
// import Protectedroutes1 from './components/Protectedroutes1';
// import Home from './Home';
// import Logout from './Logout'
// import Contact from './contact';
// import History from './History';
// import Ticket from './Ticket';
// import Main1 from './main1';
// // import { ToastContainer, toast } from 'react-toastify';
// //   import 'react-toastify/dist/ReactToastify.css';


// function App() {
 
//   return (
    
   
//    <Router>
//       <Navbar />
//       <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="/register" element={<Registration/>}/>
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/logout" element={<Logout/>}/>
        
//         <Route element={<ProtectedRoutes/>}>
//         <Route path="/main" element={<Main/>}/>
//         <Route element ={<SubProtectedRoutes/>}>
//         <Route path="/seats" element={<Seats/>}/>
//         </Route>
//         <Route path="/select" element={<Main1/>}/>
//         {/* <Route element ={<Protectedroutes1/>}> */}
//         <Route path="/confirmation" element={<Confirmation/>}/>
//         {/* <    */}
//         <Route path="/history" element={<History/>}/>
//         <Route path="/ticket" element={<Ticket/>}/>

     
//         </Route>
       
//       </Routes>
//       {/* <ToastContainer /> */}
//     </Router> 
   

   
  


//   );
// }
// export default App;

import React from 'react'

import './App.css';
import Confirmation from './confirmation';
import Main from './main';
import Seats from './seats';
import Registration from './register';
import Login from './login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Header';
import ProtectedRoutes from './components/ProtectedRoutes';
import SubProtectedRoutes from './components/SubProtectedRoutes';
import Protectedroutes1 from './components/Protectedroutes1';
import Main1 from './main1';
import Home from './Home';
import Logout from './Logout'
import Contact from './contact';
import History from './History';
import Ticket from './Ticket';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';


function App() {
 
  return (
    
   
   <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
        
        <Route element={<ProtectedRoutes/>}>
        
        <Route path="/main" element={<Main/>}/>
        <Route path="/select" element={<Main1/>}/>
        {/* <Route element ={<SubProtectedRoutes/>}>
         
        
        </Route> */}
        <Route path="/seats" element={<Seats/>}/>
        <Route element ={<Protectedroutes1/>}>
        <Route path="/confirmation" element={<Confirmation/>}/>
        </Route>
        <Route path="/history" element={<History/>}/>
        <Route path="/ticket" element={<Ticket/>}/>

     
        </Route>
       
      </Routes>
      {/* <ToastContainer /> */}
    </Router> 
   

   
  


  );
}
export default App;