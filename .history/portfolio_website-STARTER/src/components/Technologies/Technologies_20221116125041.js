import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
// @type {import('next').NextConfig}

const Technologies = () =>  (
  <Section>
    <SectionDivider/>
    <SectionTitle id ="tech">
      Technologies
    </SectionTitle>
    <SectionText>
      I have worked with a range of Technologies
       in the Front and Back-end world.
    </SectionText>
    <ListItem>
      <DiFirebase size ="3rem"/>
      <ListContainer>
        <ListTitle>
          
        </ListTitle>
      </ListContainer>
    </ListItem>
    


  </Section>
);

export default Technologies;
