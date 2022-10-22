import {FaBars} from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`

background:black;
height: 90px;
display: flex;
margin-right:20px;
justify-content:space-between;
padding:0.5rem calc((100vw-1000px)/2);
z-index:10;
padding-right:30px;
width:100%;
    border: 1px solid #121314;
    border-top: 1px solid #2b2e30;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 0px;
    overflow: hidden;

    

`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #15cdfc;
}

`;

export const Bars=styled(FaBars)`
display:none;
color:#fff;

@media screen and (max-width:768px){
  display:block;
  position:absoulte;
  align-items: center;
  top:0;
  right:0;
  transfrom:translate(-100%,75%);
  font-size:1.8rem;
  cursor:pointer;
}
`

export const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: -24px;
@media screen and (max-width:768px){
  display:none;
}

`;

export const NavBtn = styled.nav`
width: 110px;
color: #fff;
cursor: pointer;
height: 36px;
font-size: 16px;
box-sizing: border-box;
background: #007cff;
text-align: center;
line-height: 36px;
border-radius: 21px;
@media screen and (max-width:768px){
  display:none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #256cel;
padding: 10px 22px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

`;

export const NavDropdown = styled.nav`
position: relative;
  display: inline-block;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;

}`;