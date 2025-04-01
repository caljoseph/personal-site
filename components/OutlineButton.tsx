import styled from "styled-components";

const OutlineButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  border-radius: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: var(--accent);
    color: white;
  }
`;

export default OutlineButton;
