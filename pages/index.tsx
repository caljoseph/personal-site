import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import TypewriterHeading from "@/components/TypewriterHeading";
import OutlineButton from "@/components/OutlineButton";
import CTAButton from "@/components/CTAButton";
import { GetStaticProps } from 'next';
import { getFeaturedContent, BlogPost, Project, Research } from '@/lib/content';
import ContentCard from '@/components/ContentCard';
import SpecialTypewriterHeading from "@/components/SpecialTypewriterHeading";

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
`;

const HeroContent = styled.div`
  max-width: 800px;
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

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionWrapper = styled.div`
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
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
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  // Only show a maximum of 3 featured items, one from each category
  const featuredItems = [
    ...featuredContent.blogs.slice(0, 1).map(blog => ({
      type: 'blog' as const,
      item: blog,
      link: `/blog/${blog.id}`
    })),
    ...featuredContent.projects.slice(0, ).map(project => ({
      type: 'project' as const,
      item: project,
      link: `/projects/${project.id}`
    })),
    ...featuredContent.research.slice(0, 2).map(research => ({
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
          <SpecialTypewriterHeading delay={600} />
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
  const featuredContent = getFeaturedContent();

  return {
    props: {
      featuredContent
    }
  };
};