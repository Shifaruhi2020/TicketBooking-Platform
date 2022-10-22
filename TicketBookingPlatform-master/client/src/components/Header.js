
import React, { useEffect,useState } from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
// import { NavDropdown } from './NavbarElements';
function block(){
	var res=localStorage.getItem("user")
	const log=JSON.parse(res)
	var cart1=localStorage.getItem("cart")
	const cart=JSON.parse(cart1)
		for (var i = 0; i < cart.length; i++) {
				const available= cart[i].id;
				const occupied=!true;
				const user=log.id;
				const data={available,occupied,user}
				fetch(`http://127.0.0.1:5000/delete`,{
				method:"POST",
				headers:{
					'Content-Type':'application/json'
						},
				body:JSON.stringify(data)
				}).then(response => response.json())
					.catch(error => console.log(error))
  				}
			}



 
const Header = () => {
	

	const [navbarUserIsLogged, setnavbarUserIsLogged] = useState(false);
	useEffect(() => {
	  (async () => {
		const loggedIn = localStorage.getItem('user')
		if (loggedIn) setnavbarUserIsLogged(true);
	  })();
	}, [navbarUserIsLogged]);
    
	const handleLogout = () => {
		var confirm=localStorage.getItem("confirm")
		if(confirm){
			block()
			  localStorage.clear()
			setnavbarUserIsLogged(false);
		}else{
			localStorage.clear();
			setnavbarUserIsLogged(false);
		}
	
	  };

const handleLogin=()=>{
		const loggedIn = localStorage.getItem('user')
		if(loggedIn) setnavbarUserIsLogged(true)
	
	  }

const home=()=>{
		var confirm=localStorage.getItem("confirm")
		if(!confirm){
			localStorage.removeItem("cart")
			localStorage.removeItem("movie_name")
			localStorage.removeItem("movie_id")
			localStorage.removeItem("show_time")
			localStorage.removeItem("show_id")
			localStorage.removeItem("theatre_name")
			localStorage.removeItem("theatre_id")
			localStorage.removeItem("seats_wanted")
			localStorage.removeItem("price")
			localStorage.removeItem("seatsSelected")
			localStorage.removeItem("seatsSelected")
			localStorage.removeItem("dateselected")
			localStorage.removeItem("datetimeselected")
			localStorage.removeItem("showlist")
			localStorage.removeItem("main")
		  }
		else{
			block()
			localStorage.removeItem("main")
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
			localStorage.removeItem("seatsSelected")
			localStorage.removeItem("dateselected")
			localStorage.removeItem("datetimeselected")
			localStorage.removeItem("showlist")
		}
	}


	
return (
	<>
	<Nav>
		<NavLink to='/' onClick={home}>
     		<h1 className='logo'>TICKET BOOKING</h1>
		</NavLink>
		 <Bars/>
		<NavMenu>
			<NavLink onClick={home} to='/' activeStyle>
				Home
			</NavLink>
			<NavLink onClick={home} to='/contact' activeStyle>
				Contact
			</NavLink>
			<NavLink onClick={home} to='/main' activeStyle>
				Book
			</NavLink>
			{navbarUserIsLogged===true?
        	<>
				<NavLink onClick={home} to='/history' activeStyle>
					Purchase History
				</NavLink>
        		<NavLink onClick={handleLogout} to='/login' activeStyle>
					Logout
				</NavLink>

        </>:<>
        		<NavLink to='/register'onClick={handleLogin} activeStyle>
					Sign Up
				</NavLink>
        		<NavBtn>
				<NavBtnLink to='/login' onClick={handleLogin}>Sign In</NavBtnLink>
				</NavBtn>
        </>
        		}
				</NavMenu>

		
	</Nav>
	</>
);
};

export default Header;
