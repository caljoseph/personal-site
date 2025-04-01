import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import TypewriterHeading from "@/components/TypewriterHeading";
import OutlineButton from "@/components/OutlineButton";
import CTAButton from "@/components/CTAButton";
import Tag from "@/components/Tag";
import TagContainer from "@/components/TagContainer";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: calc(100vh - 200px);
  padding: 0 2rem;
  //background-image: url('/images/background.svg');
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
  padding: 5rem 2rem;
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
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeaturedCard = styled.div`
  background-color: var(--primary);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--border);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  }
`;

const FeaturedImageContainer = styled.div`
  height: 200px;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.2rem;
`;

const FeaturedContent = styled.div`
  padding: 1.5rem;
`;

const FeaturedTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeaturedDescription = styled.p`
  margin-bottom: 1rem;
`;


const FeaturedType = styled.span`
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
`;

type FeaturedItem = {
  type: 'project' | 'research' | 'blog';
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
};

export default function Home() {
  const featuredItems: FeaturedItem[] = [
    {
      type: 'project',
      title: 'Full-Stack Web Application',
      description: 'A complete web application built with modern tools and frameworks.',
      tags: ['React', 'TypeScript', 'Next.js'],
      link: '/projects/web-app',
      image: '/project-placeholder.jpg',
    },
    {
      type: 'research',
      title: 'Machine Learning Research',
      description: 'Exploring new techniques in deep learning for natural language processing.',
      tags: ['Python', 'TensorFlow', 'NLP'],
      link: '/research/ml-nlp',
      image: '/project-placeholder.jpg',
    },
    {
      type: 'blog',
      title: 'Building Accessible UIs',
      description: 'Best practices for creating inclusive and accessible user interfaces.',
      tags: ['Accessibility', 'UI/UX', 'Web'],
      link: '/blog/accessible-uis',
      image: '/project-placeholder.jpg',
    },
  ];

  return (
    <Layout 
      title="Caleb Bradshaw | Home"
      description="Personal website of Caleb Bradshaw - Computer Science Student at BYU"
    >
      <HeroSection>
        <HeroContent>
          <TypewriterHeading text="Hi, I'm Caleb " />
          <HeroSubtitle>
            Computer Science student at BYU with a passion for web development, 
            machine learning, and problem solving
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
            {featuredItems.map((item, index) => (
              <FeaturedCard key={index}>
                <FeaturedImageContainer>
                  <span>{item.type === 'blog' ? 'Blog Post Image' : item.type === 'research' ? 'Research Image' : 'Project Image'}</span>
                  {/*<Image*/}
                  {/*  src={item.image}*/}
                  {/*  alt={item.title}*/}
                  {/*  fill*/}
                  {/*  sizes="(max-width: 768px) 100vw, 33vw"*/}
                  {/*  style={{ objectFit: "cover", opacity: 0.7 }}*/}
                  {/*/>*/}
                </FeaturedImageContainer>
                <FeaturedContent>
                  <FeaturedType>{item.type}</FeaturedType>
                  <FeaturedTitle>{item.title}</FeaturedTitle>
                  <FeaturedDescription>{item.description}</FeaturedDescription>
                  <TagContainer>
                    {item.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                  </TagContainer>
                  <Link href={item.link} passHref legacyBehavior>
                    <CTAButton>View {item.type === 'blog' ? 'Post' : item.type}</CTAButton>
                  </Link>
                </FeaturedContent>
              </FeaturedCard>
            ))}
          </FeaturedGrid>
        </SectionContent>
      </SectionWrapper>
    </Layout>
  );
}