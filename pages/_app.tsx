import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import '../styles/global.css';

// Create a default theme object that works for both light and dark
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
  // This prevents any theme-related code from running on the server
  const [isMounted, setIsMounted] = useState(false);

  // Use useEffect to run only on the client after hydration
  useEffect(() => {
    // Initialize theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Load highlight.js theme
    // When using createElement, TypeScript correctly infers this as HTMLLinkElement
    const link = document.createElement('link');
    link.id = 'highlight-theme';
    link.rel = 'stylesheet';
    link.href = savedTheme === 'light'
        ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/stackoverflow-light.min.css'
        : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css';
    document.head.appendChild(link);

    // Mark component as mounted
    setIsMounted(true);

    // Initialize highlight.js if it's available
    // TypeScript will now recognize this type because of our declaration file
    if (typeof window !== 'undefined' && 'hljs' in window) {
      window.hljs.highlightAll();
    }
  }, []);

  // Theme toggle function that will be passed to components
  const toggleTheme = () => {
    if (!isMounted) return;

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update theme attribute
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update highlight.js theme
    const existingLink = document.getElementById('highlight-theme') as HTMLLinkElement;
    if (existingLink) {
      existingLink.href = newTheme === 'light'
          ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/stackoverflow-light.min.css'
          : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css';
    }

    // Re-highlight code blocks if needed
    if (typeof window !== 'undefined' && 'hljs' in window) {
      window.hljs.highlightAll();
    }
  };

  // Enhanced props with theme toggle function
  const enhancedProps = {
    ...pageProps,
    toggleTheme,
    // Always pass a consistent currentTheme for initial server render
    currentTheme: 'light', // This ensures consistent server/client rendering
  };

  return (
      <>
        {/* Load highlight.js safely with next/script */}
        <Script
            id="highlight-js"
            src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
            strategy="afterInteractive"
            onLoad={() => {
              // Safe accessing of hljs after it's loaded
              if (typeof window !== 'undefined' && 'hljs' in window) {
                window.hljs.highlightAll();
              }
            }}
        />

        {/* Handle client-side theme after hydration is complete */}
        <ThemeProvider theme={theme}>
          <Component {...enhancedProps} />

          {/* Add this to apply client-side theming after hydration */}
          {isMounted && (
              <Script
                  id="apply-saved-theme"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                (function() {
                  const savedTheme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', savedTheme);
                })();
              `
                  }}
              />
          )}
        </ThemeProvider>
      </>
  );
}