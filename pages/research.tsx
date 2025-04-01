import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import TypewriterHeading from "@/components/TypewriterHeading";
import Tag from "@/components/Tag";
import TagContainer from "@/components/TagContainer";
import { GetStaticProps } from 'next';
import { getAllContent, Research } from '@/lib/content';

const ResearchContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 800px;
`;

const ResearchSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text);
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ResearchCard = styled.div`
  background-color: var(--primary);
  border-radius: 0.5rem;
  padding: 2rem;
  border: 1px solid var(--border);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const ResearchTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text);
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
  }
`;

const ResearchDescription = styled.div`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ResearchLinks = styled.div`
  display: flex;
  gap: 1rem;
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

const PublicationsList = styled.div`
  display: grid;
  gap: 2rem;
`;

const PublicationItem = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PublicationThumbnail = styled.div`
  flex: 0 0 200px;
  height: 150px;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    height: 200px;
  }
`;

const PublicationContent = styled.div`
  flex: 1;
`;

const PublicationTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text);
`;

const PublicationAuthors = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  
  span {
    font-weight: 600;
  }
`;

const PublicationVenue = styled.p`
  margin-bottom: 1rem;
  color: var(--accent);
  font-weight: 500;
`;

const PublicationAbstract = styled.div`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: 0.95rem;
  
  p {
    margin-bottom: 0.5rem;
  }
`;

interface ResearchPageProps {
  researchItems: Research[];
}

const ResearchPage = ({ researchItems }: ResearchPageProps) => {
  // Group research items by type
  const ongoingResearch = researchItems.filter(item => item.type === 'ongoing');
  const publications = researchItems.filter(item => item.type === 'publication');
  const presentations = researchItems.filter(item => item.type === 'presentation');
  
  return (
    <Layout
      title="Research | Caleb Bradshaw"
      description="Academic research in computer science and mathematics by Caleb Bradshaw"
    >
      <ResearchContainer>
        <TypewriterHeading text="Research " />
        <Subtitle>
          Exploring the intersection of computer science and mathematics through academic research. 
          My work focuses on algorithm optimization, computational complexity, and applied machine learning.
        </Subtitle>
        
        {ongoingResearch.length > 0 && (
          <ResearchSection>
            <SectionTitle>Current Research</SectionTitle>
            
            {ongoingResearch.map(research => (
              <ResearchCard key={research.id}>
                <ResearchTitle>{research.title}</ResearchTitle>
                <ResearchMeta>
                  {research.advisor && (
                    <span>Advisor: <span className="highlight">{research.advisor}</span></span>
                  )}
                  <span>Period: <span className="highlight">{research.formattedDate}</span></span>
                  {research.status && (
                    <span>Status: <span className="highlight">{research.status}</span></span>
                  )}
                </ResearchMeta>
                <ResearchDescription>
                  <p>{research.description}</p>
                </ResearchDescription>
                <TagContainer>
                  {research.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagContainer>
                <ResearchLinks>
                  <Link href={`/research/${research.id}`} passHref legacyBehavior>
                    <ResearchLink>
                      Read More <span>→</span>
                    </ResearchLink>
                  </Link>
                </ResearchLinks>
              </ResearchCard>
            ))}
          </ResearchSection>
        )}
        
        {publications.length > 0 && (
          <ResearchSection>
            <SectionTitle>Publications</SectionTitle>
            
            <PublicationsList>
              {publications.map(publication => (
                <PublicationItem key={publication.id}>
                  <PublicationThumbnail>
                    <Image
                      src={publication.thumbnailUrl}
                      alt={publication.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      style={{ objectFit: 'cover' }}
                    />
                  </PublicationThumbnail>
                  <PublicationContent>
                    <PublicationTitle>{publication.title}</PublicationTitle>
                    {publication.authors && (
                      <PublicationAuthors>
                        {publication.authors.map((author, index) => (
                          <React.Fragment key={author}>
                            {author.includes('Bradshaw') ? <span>{author}</span> : author}
                            {index < publication.authors.length - 1 ? ', ' : ''}
                          </React.Fragment>
                        ))}
                      </PublicationAuthors>
                    )}
                    {publication.venue && (
                      <PublicationVenue>
                        {publication.venue}
                      </PublicationVenue>
                    )}
                    <PublicationAbstract>
                      <p>{publication.description}</p>
                    </PublicationAbstract>
                    <ResearchLinks>
                      <Link href={`/research/${publication.id}`} passHref legacyBehavior>
                        <ResearchLink>
                          Details <span>→</span>
                        </ResearchLink>
                      </Link>
                    </ResearchLinks>
                  </PublicationContent>
                </PublicationItem>
              ))}
            </PublicationsList>
          </ResearchSection>
        )}
        
        {presentations.length > 0 && (
          <ResearchSection>
            <SectionTitle>Academic Presentations</SectionTitle>
            
            {presentations.map(presentation => (
              <ResearchCard key={presentation.id}>
                <ResearchTitle>{presentation.title}</ResearchTitle>
                <ResearchMeta>
                  {presentation.venue && (
                    <span>Event: <span className="highlight">{presentation.venue}</span></span>
                  )}
                  <span>Date: <span className="highlight">{presentation.formattedDate}</span></span>
                  <span>Type: <span className="highlight">Presentation</span></span>
                </ResearchMeta>
                <ResearchDescription>
                  <p>{presentation.description}</p>
                </ResearchDescription>
                <ResearchLinks>
                  <Link href={`/research/${presentation.id}`} passHref legacyBehavior>
                    <ResearchLink>
                      View Presentation <span>→</span>
                    </ResearchLink>
                  </Link>
                </ResearchLinks>
              </ResearchCard>
            ))}
          </ResearchSection>
        )}
      </ResearchContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const researchItems = getAllContent<Research>('research');
  
  return {
    props: {
      researchItems
    }
  };
};

export default ResearchPage;