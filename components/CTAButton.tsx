import styled from 'styled-components';

const CTAButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: var(--text);
  color: var(--background);
  font-weight: 600;
  border: 2px solid transparent;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background-color: var(--accent);
    color: var(--background);
  }
`;

export default CTAButton;