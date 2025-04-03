import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--primary);
  padding: 2rem 2rem;
  margin-top: auto;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0 1rem;
    box-sizing: border-box;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--text);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: var(--accent);
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterList = styled.ul`
  list-style: none;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.75rem;
`;

const FooterLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: var(--accent);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid var(--border);
  color: var(--text-secondary);
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Caleb Bradshaw</FooterTitle>
          <p style={{ color: 'var(--text-secondary)' }}>
            Computer Science student at BYU with a passion for software development and mathematics.
          </p>
          <SocialIcons>
            <SocialIcon href="https://github.com/caljoseph" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/caleb-bradshaw" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/calebjbradshaw/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterList>
            <FooterListItem>
              <Link href="/" passHref legacyBehavior>
                <FooterLink>Home</FooterLink>
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/about" passHref legacyBehavior>
                <FooterLink>About</FooterLink>
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/projects" passHref legacyBehavior>
                <FooterLink>Projects</FooterLink>
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/research" passHref legacyBehavior>
                <FooterLink>Research</FooterLink>
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/blog" passHref legacyBehavior>
                <FooterLink>Blog</FooterLink>
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/cv" passHref legacyBehavior>
                <FooterLink>CV</FooterLink>
              </Link>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="mailto:calebjosephbradshaw@gmail.com">
                calebjosephbradshaw@gmail.com
              </FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="tel:+18018675892">
                (801) 867-5892
              </FooterLink>
            </FooterListItem>
            <FooterListItem>
              <span style={{ color: 'var(--text-secondary)' }}>
                Salt Lake City, Utah
              </span>
            </FooterListItem>
          </FooterList>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>© {new Date().getFullYear()} Caleb Bradshaw. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
