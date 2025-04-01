import styled from 'styled-components';

const OutlineButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: transparent;
  color: var(--accent);
  font-weight: 600;
  border: 2px solid var(--accent);
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

export default OutlineButton;