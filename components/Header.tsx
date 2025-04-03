import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const HeaderContainer = styled.header`
  background-color: var(--background);
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: padding 0.3s ease;
  width: 100%;

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
  height: 100%;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledThemeToggle = styled(ThemeToggle)`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const Logo = styled.a`
  font-size: 1.75rem;
  font-weight: 600;
  font-family: 'Inclusive Sans', sans-serif;
  color: var(--text);
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-flex;
  gap: 0.05em;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Letter = styled.span`
  display: inline-block;
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

  @media (min-width: 769px) {
    &:hover {
      transform: translateY(-6px);
    }
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
    box-shadow: ${({ $isOpen }) =>
        $isOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'};
    align-items: flex-start;
    padding-left: 2rem;
  }
`;

const MenuItem = styled.h1`
  margin-left: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

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
    height: 3px;
    background-color: var(--accent);
    transition: width 0.3s ease;
  }

  &:hover {
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
  padding: 0.5rem;
  margin-left: auto;
  align-self: center;

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
            <Logo>
              {'Caleb Bradshaw'.split('').map((char, idx) => (
                  <Letter key={idx}>{char}</Letter>
              ))}
            </Logo>
          </Link>

          <NavActions>
            <MenuToggle onClick={toggleMenu}>{isMenuOpen ? '✕' : '☰'}</MenuToggle>
          </NavActions>

          <MenuItems $isOpen={isMenuOpen}>
            <MenuItem>
              <Link href="/" passHref legacyBehavior>
                <MenuLink $active={router.pathname === '/'}>Home</MenuLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/about" passHref legacyBehavior>
                <MenuLink $active={router.pathname === '/about'}>About</MenuLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/projects" passHref legacyBehavior>
                <MenuLink $active={router.pathname === '/projects'}>Projects</MenuLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/research" passHref legacyBehavior>
                <MenuLink $active={router.pathname === '/research'}>Research</MenuLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/blog" passHref legacyBehavior>
                <MenuLink $active={router.pathname === '/blog'}>Blog</MenuLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/cv" passHref legacyBehavior>
                <MenuLink $active={router.pathname === '/cv'}>CV</MenuLink>
              </Link>
            </MenuItem>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <StyledThemeToggle />
            </div>
          </MenuItems>
        </Nav>
      </HeaderContainer>
  );
};

export default Header;
