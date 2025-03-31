import type { AppProps } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';
import '../styles/global.css';

const theme = {
  colors: {
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    accent: 'var(--accent)',
    background: 'var(--background)',
    text: 'var(--text)',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  // Initialize theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
