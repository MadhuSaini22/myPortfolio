import React from 'react';
import { AiFillCopyrightCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai';
import { SectionSubText } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:madhusaini46810@gmail.com">madhusaini46810@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      
      <SocialIconsContainer>
        <CompanyContainer>
        <Slogan>©️Designed with ❤ by <a href="https://github.com/MadhuSaini22" target="_blank" >Madhu Saini</a>.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        </SocialContainer>
        <SocialIcons href="https://github.com/MadhuSaini22">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/madhu-saini">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://mobile.twitter.com/MadhuSaini22">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      
      </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;

