import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I'm Madhu Saini, I am a passionate Programmer having proficiency in multi programming languages. I love coding and intrested to colaborate to an open source projects. 
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/MadhuSaini22'}> Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;