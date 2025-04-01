import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ActionButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<{ $variant: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  border: none;
  
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

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
}) => {
  return (
    <StyledButton
      $variant={variant}
      className={className}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

export default ActionButton;