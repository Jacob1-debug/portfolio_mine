import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      {/* <Link href ="/"> */}
      <a href ="/" style = {{display: "flex", alignItems: "center", color:"red"}}>
        <DiCssdeck size = "3 rem" /> <span>Portfolio</span>
      </a>

      {/* </Link> */}
    </Div2>
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
    </Div2>
    <Div2>
    <li>
     <Link href="/Technologies"> 
     <NavLink>
      Technologies
     </NavLink>
     </Link>
     </li>
    </Div2>
    <Div3>
    <li>
     <Link href="/skills"> 
     <NavLink>
      skills
     </NavLink>
     </Link>
     </li>
    </Div3>
  </Container>
);

export default Header;
