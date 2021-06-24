import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider /><br/><br/>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    
    <h2>My Certifications✨</h2><br/>
    <a href="https://www.hackerrank.com/certificates/7f8ac75156a3"> <b>Certificate of Problem Solving (Basic)</b></a><b/>
    <a href="https://www.hackerrank.com/certificates/f74dd22e9cfa"> <b>Python(Basic)</b></a><b/>
    <a href="https://www.hackerrank.com/certificates/eb949bd899b2"> <b>Javascript(Basic)</b></a><b/>
    <a href="https://www.credly.com/badges/1d62bbfa-31da-4302-a973-1d61b423f8af?source=linked_in_profile"> <b>Python for Data Science</b></a><b/>
    <a href="https://courses.cognitiveclass.ai/certificates/2840e8487c0742b7b5a16fb3adec110b"> <b>Python101 for Data Science</b></a><b/>
    
  </Section>
);

export default Acomplishments;
