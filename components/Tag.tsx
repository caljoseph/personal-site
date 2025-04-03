import styled from 'styled-components';

const Tag = styled.span`
  background-color: var(--tag-background);
  color: var(--accent);
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid var(--tag-border);
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
  }
`;

export default Tag;