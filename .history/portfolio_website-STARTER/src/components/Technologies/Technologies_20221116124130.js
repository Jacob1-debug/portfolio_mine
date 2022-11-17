import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


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
    <script>
    async function addFooter() {
    const resp = await fetch("footer.htm");
    const html = await resp.text();
    document.body.insertAdjacentHTML("beforeend", html);
}
    </script>


  </Section>
);

export default Technologies;
