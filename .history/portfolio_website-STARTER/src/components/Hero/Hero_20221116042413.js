import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        Welcome to my <br/>
        Personal Website
      </SectionTitle>
      <SectionText>
        Award winning 
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;