import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import OutlineButton from "@/components/buttons/OutlineButton";
import CTAButton from "@/components/buttons/CTAButton";
import { GetStaticProps } from 'next';
import { getFeaturedContent, BlogPost, Project, Research } from '@/lib/content';
import ContentCard from '@/components/ContentCard';
import ColorTypewriterHeading from "@/components/ColorTypewriterHeading";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: calc(100vh - 200px);
  padding: 0 2rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    min-height: calc(100vh - 160px);
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  width: 100%;
  overflow-x: hidden;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 0 0.5rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    max-width: 300px;
    margin: 1rem auto 0;
  }
`;

const SectionWrapper = styled.div`
  padding: 0 2rem 5rem 2rem; // Only horizontal padding + bottom

  @media (max-width: 768px) {
    padding: 0 1rem 3rem 1rem;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60%;
    height: 4px;
    background-color: var(--accent);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    text-align: center;
    
    &:after {
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
    }
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 100%;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;


interface HomePageProps {
  featuredContent: {
    blogs: BlogPost[];
    projects: Project[];
    research: Research[];
  }
}

export default function HomePage({ featuredContent }: HomePageProps) {
  // Show featured items as configured in featuredConfig.ts
  const featuredItems = [
    ...featuredContent.blogs.map(blog => ({
      type: 'blog' as const,
      item: blog,
      link: `/blog/${blog.id}`
    })),
    ...featuredContent.projects.map(project => ({
      type: 'project' as const,
      item: project,
      link: `/projects/${project.id}`
    })),
    ...featuredContent.research.map(research => ({
      type: 'research' as const,
      item: research,
      link: `/research/${research.id}`
    }))
  ];

  return (
    <Layout
      title="Caleb Bradshaw | Home"
      description="Personal website of Caleb Bradshaw - Computer Science Student at BYU"
    >
      <HeroSection>
        <HeroContent>
          <ColorTypewriterHeading delay={600} />
          <HeroSubtitle>
            <p>
              CS and Mathematics @ <span className="byu">BYU</span>
            </p>
            <p>I write about code, cognition, and whatever catches my eye.</p>
          </HeroSubtitle>
          <HeroButtons>
            <Link href="/projects" passHref legacyBehavior>
              <CTAButton>View My Projects</CTAButton>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <OutlineButton>Learn More About Me</OutlineButton>
            </Link>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <SectionWrapper>
        <SectionContent>
          <SectionTitle>Featured Work</SectionTitle>
          <FeaturedGrid>
            {featuredItems.map(({ type, item, link }) => (
              <ContentCard
                key={`${type}-${item.id}`}
                title={item.title}
                description={item.description}
                imageSrc={item.thumbnailUrl}
                date={item.formattedDate}
                tags={item.tags}
                type={type}
                metaRight={
                  type === 'blog' ? (item as BlogPost).readingTime : undefined
                }
                links={[
                  {
                    text:
                      type === 'blog'
                        ? 'Read Post'
                        : type === 'project'
                          ? 'View Project'
                          : 'View Research',
                    href: link,
                  },
                ]}
              />
            ))}
          </FeaturedGrid>
        </SectionContent>
      </SectionWrapper>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredContent = getFeaturedContent('home');

  return {
    props: {
      featuredContent
    }
  };
};