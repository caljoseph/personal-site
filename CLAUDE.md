# CLAUDE.md - Development Guidelines

## Build Commands
- `npm run dev` - Start Next.js dev server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style
- **TypeScript**: Strict typing with React.FC for components
- **Formatting**: Prettier with singleQuote, 80 char width, 2-space indent
- **Imports**: Group by external/internal, alphabetize within groups
- **Components**: Styled Components with props using $ prefix for transient props
- **Naming**: PascalCase for components/types, camelCase for variables/functions
- **CSS**: CSS variables for theming, responsive media queries
- **Error Handling**: Use try/catch with meaningful error messages
- **File Structure**: Pages in /pages, components in /components 
- **Next.js Patterns**: Use Next.js features (Image, Link, getStaticProps)
- **Patterns**: Functional components with hooks, mobile-first responsive design
- **State Management**: React hooks (useState, useEffect) for component state
- **Deployment**: Configured for seamless deployment on Vercel