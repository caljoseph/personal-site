import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import TagContainer from '@/components/TagContainer';
import Tag from '@/components/Tag';
import { getAllContentPaths, getContentById, Research } from '@/lib/content';
import CTAButton from '@/components/CTAButton';
import OutlineButton from '@/components/OutlineButton';

// Styled components for the research page
const ResearchContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ResearchHeader = styled.div`
  margin-bottom: 3rem;
`;

const ResearchTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ResearchMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  span.highlight {
    color: var(--accent);
    font-weight: 500;
  }
`;

const AuthorsList = styled.div`
  margin-bottom: 1.5rem;
  font-style: italic;
  color: var(--text-secondary);
  
  span {
    font-weight: 600;
  }
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ResearchContent = styled.div`
  color: var(--text);
  line-height: 1.8;
  
  h2 {
    font-size: 1.75rem;
    margin: 2rem 0 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 1.75rem 0 0.75rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  blockquote {
    border-left: 4px solid var(--accent);
    padding-left: 1rem;
    margin-left: 0;
    color: var(--text-secondary);
    font-style: italic;
  }
  
  code {
    background-color: var(--secondary);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', monospace;
  }
  
  pre {
    background-color: var(--secondary);
    padding: 1rem;
    border-radius: 0.25rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.25rem;
    margin: 1.5rem 0;
  }
  
  a {
    color: var(--accent);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #60a5fa;
      text-decoration: underline;
    }
  }
`;

const ResearchLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const ResearchLink = styled.a`
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

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    min-width: 180px;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  svg {
    flex-shrink: 0;
  }
`;


const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  margin-bottom: 2rem;
  
  &:hover {
    color: #60a5fa;
  }
`;

const PublicationVenue = styled.p`
  margin-bottom: 1rem;
  color: var(--accent);
  font-weight: 500;
`;

interface ResearchPageProps {
  research: Research;
}

export default function ResearchPage({ research }: ResearchPageProps) {
  if (!research) {
    return (
      <Layout title="Research Not Found | Caleb Bradshaw">
        <ResearchContainer>
          <p>Sorry, the research you're looking for couldn't be found.</p>
        </ResearchContainer>
      </Layout>
    );
  }

  // Format authors list with commas and 'and'
  const formatAuthors = (authors: string[]) => {
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
    return authors.map((author, index) => {
      if (index === authors.length - 1) return `and ${author}`;
      return `${author}, `;
    }).join('');
  };

  return (
    <Layout 
      title={`${research.title} | Caleb Bradshaw's Research`}
      description={research.description}
    >
      <ResearchContainer>
        <BackLink href="/research">
          ← Back to Research
        </BackLink>
        
        <ResearchHeader>
          <ResearchTitle>{research.title}</ResearchTitle>
          
          {research.authors && (
            <AuthorsList>
              {formatAuthors(research.authors)}
            </AuthorsList>
          )}
          
          <ResearchMeta>
            {research.type && (
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                </svg>
                Type: <span className="highlight">
                  {research.type.charAt(0).toUpperCase() + research.type.slice(1)}
                </span>
              </span>
            )}
            
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
              Date: <span className="highlight">{research.formattedDate}</span>
            </span>
            
            {research.advisor && (
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                Advisor: <span className="highlight">{research.advisor}</span>
              </span>
            )}
            
            {research.status && (
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
                </svg>
                Status: <span className="highlight">{research.status}</span>
              </span>
            )}
          </ResearchMeta>
          
          {research.venue && (
            <PublicationVenue>{research.venue}</PublicationVenue>
          )}
          
          <TagContainer>
            {research.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
        </ResearchHeader>
        
        <ThumbnailContainer>
          <Image 
            src={research.thumbnailUrl} 
            alt={research.title} 
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </ThumbnailContainer>
        
        <ResearchContent dangerouslySetInnerHTML={{ __html: research.content }} />
        
        {(research.arxivUrl || research.paperUrl) && (
          <ButtonContainer>
            {research.paperUrl && (
              <OutlineButton 
                href={research.paperUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                as="a"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: '0.5rem'}}>
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                </svg>
                View Paper
              </OutlineButton>
            )}
            {research.arxivUrl && (
              <CTAButton 
                href={research.arxivUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                as="a"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: '0.5rem'}}>
                  <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
                  <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  <path d="M14 7v-.5a.5.5 0 0 0-1 0V7h-.5a.5.5 0 0 0 0 1H13v.5a.5.5 0 0 0 1 0V8h.5a.5.5 0 0 0 0-1H14z"/>
                </svg>
                arXiv
              </CTAButton>
            )}
          </ButtonContainer>
        )}
      </ResearchContainer>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentPaths('research');
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const research = getContentById<Research>('research', params?.id as string);
  
  if (!research) {
    return {
      notFound: true
    };
  }
  
  return {
    props: {
      research
    }
  };
};