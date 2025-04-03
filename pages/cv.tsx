import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import TypewriterHeading from "@/components/TypewriterHeading";

const CVContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
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

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 800px;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  padding: 0.75rem 2rem;
  background-color: transparent;
  border: 3px solid var(--accent);
  color: var(--accent);
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background-color: var(--accent);
    color: white;
  }
`;

const CVSection = styled.section`
  margin-bottom: 4rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 3rem;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--text);
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const CVEntry = styled.div`
  margin-bottom: 2.5rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.75rem;
    width: 0.5rem;
    height: 0.5rem;
    background-color: var(--accent);
    border-radius: 50%;
  }
`;

const EntryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const EntryTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin: 0;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const EntryDate = styled.span`
  color: var(--accent);
  font-weight: 600;
  white-space: nowrap;
`;

const EntrySubtitle = styled.div`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-style: italic;
`;

const EntryDescription = styled.div`
  color: var(--text-secondary);
  
  ul {
    margin-top: 0.5rem;
    margin-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--text);
    position: relative;
    padding-bottom: 0.5rem;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 40px;
      height: 2px;
      background-color: var(--accent);
    }
  }
`;

const SkillList = styled.ul`
  list-style: none;
  margin-left: 0.5rem;
  
  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    color: var(--text-secondary);
    line-height: 1.5;
    
    &:before {
      content: '•';
      color: var(--accent);
      margin-right: 0.5rem;
      font-size: 1.2rem;
      line-height: 1;
      display: inline-block;
      transform: translateY(-1px);
    }
  }
`;

const LanguageSkill = styled.div`
  margin-bottom: 1.5rem;
  
  h4 {
    color: var(--text);
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const ProgressBar = styled.div`
  height: 0.5rem;
  background-color: var(--border);
  border-radius: 0.25rem;
  overflow: hidden;
  
  div {
    height: 100%;
    background-color: var(--accent);
  }
`;

const CVPage = () => {
  return (
      <Layout
          title="CV | Caleb Bradshaw"
          description="Curriculum Vitae and professional experience of Caleb Bradshaw"
      >
        <CVContainer>
          <TypewriterHeading text="Curriculum Vitae" />
          <Subtitle>
            A detailed overview of my academic and professional experience, skills, and achievements.
          </Subtitle>

          <DownloadButton href="/Caleb_Bradshaw_CV.pdf" download target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF Version
          </DownloadButton>

          <CVSection>
            <SectionTitle>Education</SectionTitle>
            <CVEntry>
              <EntryHeader>
                <EntryTitle>Bachelor of Science in Computer Science</EntryTitle>
                <EntryDate>2019 - Dec 2025 (Expected)</EntryDate>
              </EntryHeader>
              <EntrySubtitle>Brigham Young University, Provo, UT</EntrySubtitle>
              <EntryDescription>
                <p>Minor: Mathematics</p>
                <p>GPA: 4.0 | ACT: 35 | GRE: 170 Verbal</p>
              </EntryDescription>
            </CVEntry>
          </CVSection>

          <CVSection>
            <SectionTitle>Experience</SectionTitle>
            <CVEntry>
              <EntryHeader>
                <EntryTitle>Software Engineer Intern</EntryTitle>
                <EntryDate>Apr 2024 – Sept 2024</EntryDate>
              </EntryHeader>
              <EntrySubtitle>Covr</EntrySubtitle>
              <EntryDescription>
                <ul>
                  <li>Designed, developed, and deployed Go microservices from concept to production</li>
                  <li>Streamlined notification infrastructure for nursing agency clients</li>
                  <li>Built Python k-d tree simulations to model market coverage</li>
                </ul>
              </EntryDescription>
            </CVEntry>

            <CVEntry>
              <EntryHeader>
                <EntryTitle>Research Assistant</EntryTitle>
                <EntryDate>Jan 2024 – Present</EntryDate>
              </EntryHeader>
              <EntrySubtitle>IDeA Labs, BYU</EntrySubtitle>
              <EntryDescription>
                <ul>
                  <li>Contributed to two NLP research papers on LLM-based predictions and scene segmentation</li>
                  <li>Built neural network pipelines and data workflows using PyTorch and CUDA</li>
                </ul>
              </EntryDescription>
            </CVEntry>
          </CVSection>

          <CVSection>
            <SectionTitle>Research</SectionTitle>
            <CVEntry>
              <EntryHeader>
                <EntryTitle>Bradshaw, C., Miller, C., & Warnick, S. (2024)</EntryTitle>
                <EntryDate>arXiv:2411.03486</EntryDate>
              </EntryHeader>
              <EntryDescription>
                <p>Introduced a novel approach to using LLM output token probabilities as predictive distributions for US electoral outcomes.</p>
              </EntryDescription>
            </CVEntry>

            <CVEntry>
              <EntryHeader>
                <EntryTitle>DeBuse, M., Miller, C., Bradshaw, C., & Warnick, S. (2024)</EntryTitle>
                <EntryDate>Submitted, TACL 2025</EntryDate>
              </EntryHeader>
              <EntryDescription>
                <p>Designed and deployed a neural network to interpret story structure by treating embedded text as a continuous signal.</p>
              </EntryDescription>
            </CVEntry>
          </CVSection>

          <CVSection>
            <SectionTitle>Projects</SectionTitle>
            <CVEntry>
              <EntryHeader>
                <EntryTitle>StyleCanvas (stylecanvasai.com)</EntryTitle>
              </EntryHeader>
              <EntryDescription>
                <ul>
                  <li>Architected full-stack AI model hosting platform using AWS EC2, Cognito, S3, DynamoDB, and Stripe</li>
                  <li>Implemented autoscaling and secure subscription authentication with NestJS and Docker</li>
                </ul>
              </EntryDescription>
            </CVEntry>
          </CVSection>

          <CVSection>
            <SectionTitle>Skills</SectionTitle>
            <SkillsContainer>
              <SkillCategory>
                <h3>Programming Languages</h3>
                <SkillList>
                  <li>Go</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Python</li>
                  <li>C++</li>
                </SkillList>
              </SkillCategory>

              <SkillCategory>
                <h3>Technologies</h3>
                <SkillList>
                  <li>Docker & Kubernetes</li>
                  <li>AWS (EC2, S3, Cognito, DynamoDB, SQS)</li>
                  <li>React, NestJS, Gin</li>
                  <li>PyTorch, CUDA</li>
                </SkillList>
              </SkillCategory>

              <SkillCategory>
                <h3>Concepts & Methods</h3>
                <SkillList>
                  <li>Bayesian Analysis</li>
                  <li>Test-Driven Development</li>
                  <li>Machine Learning Model Deployment</li>
                  <li>Parallel Computing</li>
                  <li>Algorithm Design</li>
                </SkillList>
              </SkillCategory>
            </SkillsContainer>
          </CVSection>

          <CVSection>
            <SectionTitle>Languages</SectionTitle>
            <LanguageSkill>
              <h4>English</h4>
              <ProgressBar><div style={{ width: '100%' }}></div></ProgressBar>
            </LanguageSkill>
            <LanguageSkill>
              <h4>French</h4>
              <ProgressBar><div style={{ width: '85%' }}></div></ProgressBar>
            </LanguageSkill>
          </CVSection>

          <CVSection>
            <SectionTitle>Awards</SectionTitle>
            <CVEntry>
              <EntryHeader>
                <EntryTitle>Full-Ride Scholarship to BYU</EntryTitle>
              </EntryHeader>
            </CVEntry>
            <CVEntry>
              <EntryHeader>
                <EntryTitle>Phi Delta Phi (French Honor Society)</EntryTitle>
              </EntryHeader>
            </CVEntry>
            <CVEntry>
              <EntryHeader>
                <EntryTitle>Los Alamos National Laboratory Applied Machine Learning Fellowship (2025)</EntryTitle>
              </EntryHeader>
            </CVEntry>
          </CVSection>

          <CVSection>
            <SectionTitle>References</SectionTitle>
            <p style={{ color: 'var(--text-secondary)' }}>Available upon request.</p>
          </CVSection>
        </CVContainer>
      </Layout>
  );
};
export default CVPage;
