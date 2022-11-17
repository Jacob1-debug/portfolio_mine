import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
 
    <Div1>
      {/* <Link href ="/"> */}
      <a href ="/" style = {{display: "flex", alignItems: "center", color:"white"}}>
        <DiCssdeck size = "3rem" /> <span>Rotich, Jacob</span>
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

     <Div3>
      <SocialIcons href='https://github.com/Jacob1-debug'>
        <AiFillGithubsize size = "3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/jacob-rotich/'>
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
  
     </Div3>

  </Container>
);

export default Header;
