import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { LinkColumn } from '../Footer/FooterStyles';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

   const scroll = (node, left) => {
     return node.scrollTo({ left, behavior: 'smooth' });
   }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    
    <Section id="about">
      <SectionDivider />
      <br/><br/>
      <SectionTitle>About me</SectionTitle>
      <SectionText>
         Hello👋, I'm Madhu Saini👩 A middler at <a href="https://ckpcet.ac.in/"> <b>CKPCET</b>, Surat</a> pursuing BE in Computer Engineering👩‍💻. I am an enthusiastic👀 and a person take up new challenges🎯 and learn new skills⚙️. I love💛 meeting new people👩🏽‍🚀, exchanging ideas💡 and spreading knowledge🗂 and positivity🌈.<br/><br/>
         <ul>
            <li><strong>BE(Computer Engineering):</strong><p><i>C.K.Pithawala College of Engineering and Technology,Surat</i></p></li><br/>
            <li><strong>12th:</strong><p><i>Gyanjyot Vidyalaya,Surat</i></p></li><br/>
            <li><strong>10th:</strong><p><i>RadheyShyam English School,Surat</i></p></li>
            
            
         </ul>
      </SectionText>
    </Section>
  );
};

export default Timeline;
