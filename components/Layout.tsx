import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  overflow-x: hidden;
`;

const Layout: React.FC<LayoutProps> = ({ children, title = 'Caleb Bradshaw', description = 'Personal website of Caleb Bradshaw' }) => {
  const url = 'https://calebbradshaw.dev';
  return (
    <AppContainer>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={url} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${url}/images/profile-pic.jpg`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${url}/images/profile-pic.jpg`} />
      </Head>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </AppContainer>
  );
};

export default Layout;
