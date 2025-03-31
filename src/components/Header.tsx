import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--primary);
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: padding 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  
  &:hover {
    color: var(--accent);
  }
`;

const MenuItems = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    background-color: var(--primary);
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? 'calc(100vh - 70px)' : '0')};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    padding: ${({ isOpen }) => (isOpen ? '1rem 0' : '0')};
    box-shadow: ${({ isOpen }) => (isOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none')};
  }
`;

const MenuItem = styled.li`
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin: 1rem 2rem;
  }
`;

const MenuLink = styled(Link)<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? 'var(--accent)' : 'var(--text)')};
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--accent);
    
    &:after {
      width: 100%;
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer style={{ padding: scrolled ? '1rem 2rem' : '1.5rem 2rem' }}>
      <Nav>
        <Logo to="/">Caleb Bradshaw</Logo>
        
        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuToggle>
        
        <MenuItems isOpen={isMenuOpen}>
          <MenuItem>
            <MenuLink to="/" $active={location.pathname === '/'}>
              Home
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about" $active={location.pathname === '/about'}>
              About
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/projects" $active={location.pathname === '/projects'}>
              Projects
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/research" $active={location.pathname === '/research'}>
              Research
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/blog" $active={location.pathname === '/blog'}>
              Blog
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/cv" $active={location.pathname === '/cv'}>
              CV
            </MenuLink>
          </MenuItem>
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
