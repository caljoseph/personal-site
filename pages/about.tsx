import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import TypewriterHeading from "@/components/TypewriterHeading";
import ProfileSlideshow from '@/components/ProfileSlideshow';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 3rem;
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
    font-size: 2.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 3rem 0 1.5rem;
  color: var(--text);
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ProfileSection = styled.section`
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ProfileImage = styled.div`
  flex: 0 0 300px;
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: var(--tag-background);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-weight: 500;
  
  span {
    position: relative;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    margin: 0 auto;
  }
`;

const ProfileContent = styled.div`
  flex: 1;
  
  p {
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled.div`
  background-color: var(--primary);
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border);
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  i {
    color: var(--accent);
  }
`;

const SkillList = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    color: var(--text-secondary);
    
    &:before {
      content: '•';
      color: var(--accent);
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }
  }
`;

const TimelineContainer = styled.div`
  margin-top: 2rem;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2rem;
  border-left: 2px solid var(--border);
  
  &:last-child {
    border-left: 2px solid transparent;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 14px;
    height: 14px;
    background-color: var(--accent);
    border-radius: 50%;
  }
`;

const TimelineDate = styled.div`
  font-size: 0.875rem;
  color: var(--accent);
  margin-bottom: 0.25rem;
  font-weight: 600;
`;

const TimelineTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text);
`;

const TimelineSubtitle = styled.div`
  font-style: italic;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
`;

const TimelineContent = styled.div`
  color: var(--text-secondary);
`;

const ContactSection = styled.section`
  border-top: 1px solid var(--border);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContactCard = styled.div`
  background-color: var(--primary);
  border-radius: 0.5rem;
  padding: 2rem;
  border: 1px solid var(--border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const ContactCardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--text-secondary);
  
  a {
    color: var(--accent);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #60a5fa;
    }
  }
`;

const AboutPage = () => {
  // Array of all profile images from the about directory
  const profileImages = [
    '/images/about/profile-pic.jpg',
    '/images/about/congress-pic.png',
    '/images/about/timp-pic.png',
    '/images/about/climbing-pic.png',
  ];

  return (
    <Layout
      title="About | Caleb Bradshaw"
      description="Learn more about Caleb Bradshaw, his background, skills, and interests"
    >
      <AboutContainer>
        <TypewriterHeading text="About Me " />

        <ProfileSection>
          <ProfileSlideshow 
            images={profileImages}
            alt="Caleb Bradshaw"
          />

          <ProfileContent>
            <p>
              Hello! I&apos;m Caleb Bradshaw, a Computer Science student at
              Brigham Young University with a minor in Mathematics. I love
              solving problems through beautiful and functional code.
            </p>

            <p>
              My journey in computer science began when I was in high school,
              where I discovered my passion for programming through creating
              simple games and websites.
            </p>

            <p>
              At BYU, I&apos;ve had the opportunity to explore various areas of
              computer science, from web development to artificial intelligence
              and computational theory. I&apos;m particularly drawn to Natural Language Processing and AI in
              general.
            </p>

            <p>
              Outside of academics, I&apos;m a trail runner, back country skier, and rock
              climber. I believe in continuous learning and am always excited to
              take on new challenges and projects that push the boundaries of my
              knowledge and skills.
            </p>
          </ProfileContent>
        </ProfileSection>

        <SectionTitle>My Skills</SectionTitle>
        <SkillsGrid>
          <SkillCard>
            <SkillTitle>
              <i className="fas fa-code"></i>
              Frontend
            </SkillTitle>
            <SkillList>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>HTML5 & CSS3</li>
            </SkillList>
          </SkillCard>

          <SkillCard>
            <SkillTitle>
              <i className="fas fa-server"></i>
              Backend & Cloud
            </SkillTitle>
            <SkillList>
              <li>Go (Gin)</li>
              <li>NestJS</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>DynamoDB</li>
              <li>AWS (EC2, Cognito, S3, SQS, SageMaker)</li>
            </SkillList>
          </SkillCard>

          <SkillCard>
            <SkillTitle>
              <i className="fas fa-brain"></i>
              ML & SciComp
            </SkillTitle>
            <SkillList>
              <li>Python</li>
              <li>PyTorch</li>
              <li>Pandas & NumPy</li>
              <li>CUDA</li>
              <li>Bayesian Modeling</li>
            </SkillList>
          </SkillCard>

          <SkillCard>
            <SkillTitle>
              <i className="fas fa-tools"></i>
              Tools & Systems
            </SkillTitle>
            <SkillList>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>CI/CD Pipelines</li>
            </SkillList>
          </SkillCard>
        </SkillsGrid>

        <SectionTitle>Education & Experience</SectionTitle>
        <TimelineContainer>
          <TimelineItem>
            <TimelineDate>January 2024 – Present</TimelineDate>
            <TimelineTitle>Research Assistant</TimelineTitle>
            <TimelineSubtitle>IDeA Labs, BYU</TimelineSubtitle>
            <TimelineContent>
              <p>
                Working on machine learning research in applied embedding and
                LLM interpretability.
              </p>
              <p>
                Contributed to a pending ACL paper on fiction scene
                segmentation using signal-processing-inspired neural models.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDate>April 2024 – September 2024</TimelineDate>
            <TimelineTitle>Software Engineer Intern</TimelineTitle>
            <TimelineSubtitle>Covr</TimelineSubtitle>
            <TimelineContent>
              <p>
                Designed, developed, and deployed Go microservices for a
                notification system, from concept through production.
              </p>
              <p>
                Simulated nursing agency market dynamics using Python and k-d
                trees to support business strategy.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDate>2019 – Present</TimelineDate>
            <TimelineTitle>
              Bachelor of Science in Computer Science
            </TimelineTitle>
            <TimelineSubtitle>
              Brigham Young University, Provo, UT
            </TimelineSubtitle>
            <TimelineContent>
              <p>
                Minor in Mathematics. GPA: 4.0. Focused on algorithm design,
                machine learning, systems, and software engineering.
              </p>
              <p>
                Relevant coursework: Advanced Algorithms, Machine Learning, Deep
                Learning, NLP, System Design, and Linear Algebra.
              </p>
            </TimelineContent>
          </TimelineItem>
        </TimelineContainer>

        <ContactSection id="contact">
          <SectionTitle>Get In Touch</SectionTitle>
          <p style={{ color: 'var(--text-secondary)' }}>
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat.
          </p>

          <ContactGrid>
            <ContactCard>
              <ContactCardTitle>Email</ContactCardTitle>
              <ContactInfo>
                <a href="mailto:calebjosephbradshaw@gmail.com">
                  calebjosephbradshaw@gmail.com
                </a>
              </ContactInfo>
            </ContactCard>

            <ContactCard>
              <ContactCardTitle>Social Media</ContactCardTitle>
              <ContactInfo>
                <a
                  href="https://www.linkedin.com/in/caleb-bradshaw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/caljoseph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/calebjbradshaw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </ContactInfo>
            </ContactCard>

            <ContactCard>
              <ContactCardTitle>Location</ContactCardTitle>
              <ContactInfo>
                <p>Based near Salt Lake City, Utah</p>
              </ContactInfo>
            </ContactCard>
          </ContactGrid>
        </ContactSection>
      </AboutContainer>
    </Layout>
  );
};

export default AboutPage;