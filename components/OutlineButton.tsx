import styled from "styled-components";

const OutlineButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: transparent;
  border: 3px solid var(--accent);
  color: var(--accent);
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  
  &:hover {
    background-color: var(--accent);
    color: white;
  }
`;

export default OutlineButton;
