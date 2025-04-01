import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import TagContainer from './TagContainer';
import Tag from './Tag';

// Styled Components
const Card = styled.div<{ $isFeature?: boolean }>`
  background-color: var(--primary);
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  ${({ $isFeature }) => !$isFeature && `
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
    }
  `}
  
  ${({ $isFeature }) => $isFeature && `
    @media (min-width: 768px) {
      flex-direction: row;
    }
  `}
`;

const ImageContainer = styled.div<{ $isFeature?: boolean }>`
  position: relative;
  background-color: var(--secondary);
  
  ${({ $isFeature }) => !$isFeature && `
    height: 200px;
  `}
  
  ${({ $isFeature }) => $isFeature && `
    height: 300px;
    
    @media (min-width: 768px) {
      flex: 0 0 40%;
    }
    
    @media (max-width: 767px) {
      height: 200px;
    }
  `}
`;

const ContentContainer = styled.div<{ $isFeature?: boolean }>`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  ${({ $isFeature }) => $isFeature && `
    @media (min-width: 768px) {
      flex: 1;
    }
  `}
`;

const TypeLabel = styled.span`
  display: inline-block;
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--accent);
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  border: 1px solid rgba(59, 130, 246, 0.2);
  width: fit-content;
`;

const Title = styled.h3<{ $isFeature?: boolean }>`
  font-size: ${props => props.$isFeature ? '1.75rem' : '1.5rem'};
  margin-bottom: 0.75rem;
  color: var(--text);
`;

const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

interface ContentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  date: string;
  tags: string[];
  type: 'blog' | 'project' | 'research';
  isFeature?: boolean;
  metaRight?: string;
  buttons: ReactNode;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  imageSrc,
  date,
  tags,
  type,
  isFeature = false,
  metaRight,
  buttons,
}) => {
  return (
    <Card $isFeature={isFeature}>
      <ImageContainer $isFeature={isFeature}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes={isFeature ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 100vw, 350px"}
          style={{ objectFit: "cover" }}
        />
      </ImageContainer>
      <ContentContainer $isFeature={isFeature}>
        <TypeLabel>{type}</TypeLabel>
        <Title $isFeature={isFeature}>{title}</Title>
        <MetaInfo>
          <span>{date}</span>
          {metaRight && <span>{metaRight}</span>}
        </MetaInfo>
        <Description>{description}</Description>
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
        <ButtonContainer>
          {buttons}
        </ButtonContainer>
      </ContentContainer>
    </Card>
  );
};

export default ContentCard;