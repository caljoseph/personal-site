import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import TagContainer from './TagContainer';
import Tag from './Tag';
import Link from 'next/link';

// Styled Components
const Card = styled.div<{ $isFeature?: boolean }>`
  background-color: var(--primary);
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  }

  ${({ $isFeature }) => $isFeature && `
    margin-bottom: 2rem;
    
    @media (min-width: 768px) {
      flex-direction: row;
      min-height: 300px;
    }
  `}
`;

const ImageContainer = styled.div<{ $isFeature?: boolean }>`
  position: relative;
  background-color: var(--secondary);

  ${({ $isFeature }) => !$isFeature && `
    height: 200px;
    
    @media (max-width: 767px) {
      height: 180px;
    }
  `}

  ${({ $isFeature }) => $isFeature && `
    @media (min-width: 768px) {
      width: 40%;
      flex: 0 0 40%;
      height: 100%;
      position: relative;
      min-height: 300px;
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
      padding: 2rem;
    }
  `}
  
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const TypeLabel = styled.span<{ $isFeature?: boolean }>`
  display: inline-block;
  background-color: ${props => props.$isFeature ? 'var(--accent)' : 'var(--tag-background)'};
  color: ${props => props.$isFeature ? 'white' : 'var(--accent)'};
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  border: ${props => props.$isFeature ? 'none' : '1px solid var(--tag-border)'};
  width: fit-content;
`;

const Title = styled.h3<{ $isFeature?: boolean }>`
  font-size: ${props => props.$isFeature ? '1.75rem' : '1.5rem'};
  margin-bottom: 0.75rem;
  color: var(--text);
  
  @media (max-width: 768px) {
    font-size: ${props => props.$isFeature ? '1.5rem' : '1.3rem'};
  }
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
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
  }
`;

const LinksContainer = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #60a5fa;
  }
`;

interface LinkItem {
  text: string;
  href: string;
  showArrow?: boolean;
}

interface ContentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  date: string;
  tags: string[];
  type: 'blog' | 'project' | 'research';
  isFeature?: boolean;
  metaRight?: string;
  links?: LinkItem[];
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
                                                   links = [],
                                                 }) => {
  return (
      <Card $isFeature={isFeature}>
        <ImageContainer $isFeature={isFeature}>
          <Image
              src={imageSrc}
              alt={title}
              fill
              sizes={isFeature ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 100vw, 350px"}
              style={{ 
                objectFit: "cover",
                width: "100%",
                height: "100%"
              }}
          />
        </ImageContainer>
        <ContentContainer $isFeature={isFeature}>
          <TypeLabel $isFeature={isFeature}>
            {isFeature ? `Featured ${type}` : type}
          </TypeLabel>
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
          {links.length > 0 && (
              <LinksContainer>
                {links.map((link, index) => (
                    <Link key={index} href={link.href} passHref legacyBehavior>
                      <CardLink>
                        {link.text} {link.showArrow !== false && <span>→</span>}
                      </CardLink>
                    </Link>
                ))}
              </LinksContainer>
          )}
        </ContentContainer>
      </Card>
  );
};

export default ContentCard;