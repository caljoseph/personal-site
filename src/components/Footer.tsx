import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--primary);
  padding: 3rem 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
  
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
            <SocialIcon href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </SocialIcon>
            <SocialIcon href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="/">Home</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/about">About</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/projects">Projects</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/research">Research</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/blog">Blog</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="/cv">CV</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="mailto:caleb.bradshaw@example.com">
                caleb.bradshaw@example.com
              </FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="tel:+1234567890">
                (123) 456-7890
              </FooterLink>
            </FooterListItem>
            <FooterListItem>
              <span style={{ color: 'var(--text-secondary)' }}>
                Provo, Utah
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
