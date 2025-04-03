import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import TypewriterHeading from "@/components/TypewriterHeading";
import Tag from "@/components/Tag";
import TagContainer from "@/components/TagContainer";
import { GetStaticProps } from 'next';
import { getAllContent, getFeaturedContent, Research } from '@/lib/content';

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
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
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
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 2.5rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
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
    margin-bottom: 1rem;
  }
`;

const PublicationContent = styled.div`
  flex: 1;
`;

const PublicationTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text);
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
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
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
`;

const FeaturedResearchItem = styled.div`
  background-color: var(--primary);
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  border: 1px solid var(--border);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeaturedResearchImage = styled.div`
  flex: 0 0 40%;
  background-color: var(--secondary);
  position: relative;
  min-height: 300px;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const FeaturedResearchContent = styled.div`
  flex: 1;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FeaturedLabel = styled.span`
  display: inline-block;
  background-color: var(--accent);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

interface ResearchPageProps {
  researchItems: (Research & { isFeatured?: boolean })[];
  featuredResearch: Research | null;
}

const ResearchPage = ({ researchItems, featuredResearch }: ResearchPageProps) => {
  // Filter out the featured research item
  const filteredItems = featuredResearch 
    ? researchItems.filter(item => item.id !== featuredResearch.id)
    : researchItems;
    
  // Group research items by type
  const ongoingResearch = filteredItems.filter(item => item.type === 'ongoing');
  const publications = filteredItems.filter(item => item.type === 'publication');
  const presentations = filteredItems.filter(item => item.type === 'presentation');
  
  return (
    <Layout
      title="Research | Caleb Bradshaw"
      description="Academic research in computer science and mathematics by Caleb Bradshaw"
    >
      <ResearchContainer>
        <TypewriterHeading text="Research " />
        <Subtitle>
          My research interests of the moment are NLP, ML Theory, and Predictive Modeling.
        </Subtitle>
        
        {featuredResearch && (
          <FeaturedResearchItem>
            <FeaturedResearchImage>
              <Image
                src={featuredResearch.thumbnailUrl}
                alt={featuredResearch.title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </FeaturedResearchImage>
            <FeaturedResearchContent>
              <FeaturedLabel>Featured</FeaturedLabel>
              <ResearchTitle>{featuredResearch.title}</ResearchTitle>
              <ResearchMeta>
                {featuredResearch.authors && (
                  <span>
                    {featuredResearch.authors.join(', ')}
                  </span>
                )}
                {featuredResearch.venue && (
                  <span>{featuredResearch.venue}</span>
                )}
              </ResearchMeta>
              <ResearchDescription>
                <p>{featuredResearch.description}</p>
              </ResearchDescription>
              <TagContainer style={{marginBottom: '1.5rem'}}>
                {featuredResearch.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagContainer>
              <Link href={`/research/${featuredResearch.id}`} passHref legacyBehavior>
                <ResearchLink>
                  View Research <span>→</span>
                </ResearchLink>
              </Link>
            </FeaturedResearchContent>
          </FeaturedResearchItem>
        )}
        
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
                  <Link href={`/research/${publication.id}`} passHref style={{ textDecoration: 'none' }}>
                    <PublicationThumbnail>
                      <Image
                        src={publication.thumbnailUrl}
                        alt={publication.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 200px"
                        style={{ objectFit: 'cover' }}
                      />
                    </PublicationThumbnail>
                  </Link>
                  <PublicationContent>
                    <Link href={`/research/${publication.id}`} passHref style={{ textDecoration: 'none', color: 'var(--text)' }}>
                      <PublicationTitle>{publication.title}</PublicationTitle>
                    </Link>
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
  const allResearchItems = getAllContent<Research>('research');
  const featuredContent = getFeaturedContent('research');
  
  // Mark featured research items
  const researchItems = allResearchItems.map(item => {
    const isFeatured = featuredContent.research.some(r => r.id === item.id);
    return {
      ...item,
      isFeatured
    };
  });
  
  return {
    props: {
      researchItems,
      featuredResearch: featuredContent.research[0] || null
    }
  };
};

export default ResearchPage;