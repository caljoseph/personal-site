import styled from 'styled-components';

const ArxivButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #d62828; /* bold red */
  color: #ffffff;
  font-weight: 600;
  border: 2px solid transparent;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background-color: #a71d2a; /* darker red on hover */
    color: #ffffff;
  }
`;

export default ArxivButton;
