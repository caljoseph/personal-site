import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
}

const StyledButton = styled.a<{ $variant: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  
  ${({ $variant }) =>
    $variant === 'primary' &&
    `
    background-color: var(--accent);
    color: white;
    
    &:hover {
      background-color: #2563eb;
    }
  `}
  
  ${({ $variant }) =>
    $variant === 'outline' &&
    `
    background-color: transparent;
    color: var(--accent);
    border: 2px solid var(--accent);
    
    &:hover {
      background-color: var(--accent);
      color: white;
    }
  `}
  
  ${({ $variant }) =>
    $variant === 'text' &&
    `
    background-color: transparent;
    color: var(--accent);
    padding: 0.5rem 0;
    
    &:hover {
      color: #2563eb;
    }
  `}
`;

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  variant = 'primary',
  target,
  rel,
  className,
  onClick,
}) => {
  return (
    <StyledButton
      href={href}
      $variant={variant}
      target={target}
      rel={rel}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default LinkButton;