import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <div className='"flex items-center bg-yellow-400 border-y border-black py-10 lg:py-0"'>
    <Div1>
      {/* <Link href ="/"> */}
      <a href ="/" style = {{display: "flex", alignItems: "left", color:"red"}}>
        <DiCssdeck size = "3 rem" /> <span>Portfolio</span>
      </a>

      {/* </Link> */}
    </Div1>
    <Div2>
      {/* <Link href ="/"> */}
      <li>
     <Link href="/projects"> 
    
     <NavLink>
      projects
     </NavLink>
     </Link>
     </li>

      {/* </Link> */}
  
  
    <li>
     <Link href="/Technologies"> 
     <NavLink>
      Technologies
     </NavLink>
     </Link>
     </li>
   
    
    <li>
     <Link href="/skills" style = {{display: "flex", alignItems: "right", color:"red"}}> 
     <NavLink>
      <span> skills</span>
     </NavLink>
     </Link>
     </li>
     </Div2>
     </div>
  </Container>
);

export default Header;
