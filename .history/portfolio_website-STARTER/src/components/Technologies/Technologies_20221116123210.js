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
    const Texts = [
            'HTML', 'CSS', 'JAVASCRIPT',
            'SQL', 'FLASK', 'REACT',
            'PYTHON', 'SOLANA',
            'DJANGO', 'NODEJS', 'ARDUINO',
            'EXPRESS', 'SQLITE', 'JQUERY'
        ];

        var tagCloud = TagCloud('.Sphere', Texts, {

           { // Sphere radius in px
            radius: 230,

            // animation speed
            // slow, normal, fast
            maxSpeed: 'fast',
            initSpeed: 'fast',

            // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
            direction: 135,

            // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
            keep: true

        });

        // Giving color to each text in sphere
        var color = '#FF5733 ';
        document.querySelector('.Sphere').style.color = color;}
 
    </script>

  </Section>
);

export default Technologies;
