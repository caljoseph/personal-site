import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

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

const NavActions = styled.div`
  display: flex;
  align-items: center;
`;

const StyledThemeToggle = styled(ThemeToggle)`
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: var(--accent);
  }
`;

const MenuItems = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  list-style: none;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    background-color: var(--primary);
    width: 100%;
    height: ${({ $isOpen }) => ($isOpen ? 'calc(100vh - 70px)' : '0')};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
    padding: ${({ $isOpen }) => ($isOpen ? '1rem 0' : '0')};
    box-shadow: ${({ $isOpen }) => ($isOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none')};
    align-items: flex-start;
    padding-left: 2rem;
  }
`;

const MenuItem = styled.li`
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin: 1rem 2rem;
  }
`;

const MenuLink = styled.a<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? 'var(--accent)' : 'var(--text)')};
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  cursor: pointer;
  
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
  const router = useRouter();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer style={{ padding: scrolled ? '1rem 2rem' : '1.5rem 2rem' }}>
      <Nav>
        <Link href="/" passHref legacyBehavior>
          <Logo>Caleb Bradshaw</Logo>
        </Link>
        
        <NavActions>
          <MenuToggle onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </MenuToggle>
        </NavActions>
        
        <MenuItems $isOpen={isMenuOpen}>
          <MenuItem>
            <Link href="/" passHref legacyBehavior>
              <MenuLink $active={router.pathname === '/'}>
                Home
              </MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/about" passHref legacyBehavior>
              <MenuLink $active={router.pathname === '/about'}>
                About
              </MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/projects" passHref legacyBehavior>
              <MenuLink $active={router.pathname === '/projects'}>
                Projects
              </MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/research" passHref legacyBehavior>
              <MenuLink $active={router.pathname === '/research'}>
                Research
              </MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/blog" passHref legacyBehavior>
              <MenuLink $active={router.pathname === '/blog'}>
                Blog
              </MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/cv" passHref legacyBehavior>
              <MenuLink $active={router.pathname === '/cv'}>
                CV
              </MenuLink>
            </Link>
          </MenuItem>
          <StyledThemeToggle />
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;