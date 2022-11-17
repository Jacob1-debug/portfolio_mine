import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
// @type {import('next').NextConfig}

const Technologies = () =>  (
  <Section>
    <SectionDivider/>
    <
    <SectionTitle id ="tech">
      Technologies
    </SectionTitle>
    <SectionText>
      I have worked with a range of Technologies
       in the Front and Back-end world.
    </SectionText>
    <List>
    <ListItem>
      <DiFirebase size ="3rem"/>
      <ListContainer>
        <ListTitle>
          <ListParagraph>
            Experience with <br>
            </br> ReactJs
          </ListParagraph>
        </ListTitle>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size ="3rem"/>
      <ListContainer>
        <ListTitle>
          <ListParagraph>
            Experience with <br>
            </br> Figma
          </ListParagraph>
        </ListTitle>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiReact size ="3rem"/>
      <ListContainer>
        <ListTitle>
          <ListParagraph>
            Experience with <br>
            </br> Back-End Development
          </ListParagraph>
        </ListTitle>
      </ListContainer>
    </ListItem>
    </List>
    
    


  </Section>
);

export default Technologies;
