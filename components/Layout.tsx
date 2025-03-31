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
`;

const Layout: React.FC<LayoutProps> = ({ children, title = 'Caleb Bradshaw', description = 'Personal website of Caleb Bradshaw' }) => {
  return (
    <AppContainer>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </AppContainer>
  );
};

export default Layout;
