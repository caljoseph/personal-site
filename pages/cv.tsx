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
        <TypewriterHeading text="Curriculum Vitae " />
        <Subtitle>
          A detailed overview of my academic and professional experience, skills, and achievements.
        </Subtitle>
        
        <DownloadButton href="#" target="_blank" rel="noopener noreferrer">
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
              <EntryDate>2021 - Present</EntryDate>
            </EntryHeader>
            <EntrySubtitle>Brigham Young University, Provo, UT</EntrySubtitle>
            <EntryDescription>
              <p>Minor in Mathematics</p>
              <p>GPA: 3.85/4.0</p>
              <p>Expected Graduation: May 2025</p>
              <p>Relevant Coursework:</p>
              <ul>
                <li>Advanced Algorithms and Data Structures</li>
                <li>Machine Learning and Artificial Intelligence</li>
                <li>Database Systems Design</li>
                <li>Computer Networks and Distributed Systems</li>
                <li>Software Engineering Principles</li>
                <li>Web Development (Frontend and Backend)</li>
                <li>Linear Algebra and Discrete Mathematics</li>
                <li>Statistics and Probability for Computer Science</li>
              </ul>
            </EntryDescription>
          </CVEntry>
          
          <CVEntry>
            <EntryHeader>
              <EntryTitle>High School Diploma</EntryTitle>
              <EntryDate>2017 - 2021</EntryDate>
            </EntryHeader>
            <EntrySubtitle>Westview High School, Portland, OR</EntrySubtitle>
            <EntryDescription>
              <p>Valedictorian</p>
              <p>GPA: 4.0/4.0</p>
              <p>Advanced Placement Courses: Computer Science, Calculus BC, Physics, Statistics</p>
              <p>Founded and led the school&apos;s Robotics Club and participated in regional competitions</p>
            </EntryDescription>
          </CVEntry>
        </CVSection>
        
        <CVSection>
          <SectionTitle>Work Experience</SectionTitle>
          
          <CVEntry>
            <EntryHeader>
              <EntryTitle>Software Engineering Intern</EntryTitle>
              <EntryDate>Summer 2023</EntryDate>
            </EntryHeader>
            <EntrySubtitle>Tech Innovations Inc., Salt Lake City, UT</EntrySubtitle>
            <EntryDescription>
              <ul>
                <li>Developed and maintained web applications using React, TypeScript, and Node.js in an agile team environment</li>
                <li>Designed and implemented RESTful APIs to connect frontend and backend services, improving data retrieval efficiency by 30%</li>
                <li>Collaborated with UX designers to implement responsive user interfaces following design specifications</li>
                <li>Participated in code reviews and pair programming sessions to maintain code quality and share knowledge</li>
                <li>Created automated tests using Jest and React Testing Library, increasing test coverage by 25%</li>
              </ul>
            </EntryDescription>
          </CVEntry>
          
          <CVEntry>
            <EntryHeader>
              <EntryTitle>Research Assistant</EntryTitle>
              <EntryDate>2022 - Present</EntryDate>
            </EntryHeader>
            <EntrySubtitle>BYU Computer Science Department, Provo, UT</EntrySubtitle>
            <EntryDescription>
              <ul>
                <li>Conduct research on algorithm optimization for large-scale graph processing under the supervision of Dr. Robert Johnson</li>
                <li>Implement and evaluate various algorithms for community detection and influence propagation in social networks</li>
                <li>Analyze performance metrics and optimize code for efficiency, achieving a 40% improvement in processing time</li>
                <li>Contribute to research papers and presentations for academic conferences</li>
                <li>Collaborate with other researchers on interdisciplinary projects combining computer science and mathematical concepts</li>
              </ul>
            </EntryDescription>
          </CVEntry>
          
          <CVEntry>
            <EntryHeader>
              <EntryTitle>Teaching Assistant</EntryTitle>
              <EntryDate>2021 - 2022</EntryDate>
            </EntryHeader>
            <EntrySubtitle>BYU Department of Computer Science, Provo, UT</EntrySubtitle>
            <EntryDescription>
              <ul>
                <li>Assisted professors in teaching introductory programming courses (CS 142: Introduction to Computer Programming)</li>
                <li>Conducted lab sessions, provided one-on-one help to students, and graded assignments and exams</li>
                <li>Developed supplementary teaching materials to help students better understand complex programming concepts</li>
                <li>Held weekly office hours to provide additional support for struggling students</li>
                <li>Received a student satisfaction rating of 4.8/5.0 based on end-of-semester evaluations</li>
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
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>SQL</li>
                <li>HTML/CSS</li>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <h3>Frameworks & Libraries</h3>
              <SkillList>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Django</li>
                <li>TensorFlow</li>
                <li>Pandas & NumPy</li>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <h3>Tools & Platforms</h3>
              <SkillList>
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
              </SkillList>
            </SkillCategory>
            
            <SkillCategory>
              <h3>Concepts & Methodologies</h3>
              <SkillList>
                <li>Algorithm Design</li>
                <li>Data Structures</li>
                <li>Object-Oriented Programming</li>
                <li>Agile Development</li>
                <li>Test-Driven Development</li>
                <li>CI/CD Pipelines</li>
              </SkillList>
            </SkillCategory>
          </SkillsContainer>
        </CVSection>
        
        <CVSection>
          <SectionTitle>Languages</SectionTitle>
          
          <LanguageSkill>
            <h4>English</h4>
            <ProgressBar>
              <div style={{ width: '100%' }}></div>
            </ProgressBar>
          </LanguageSkill>
          
          <LanguageSkill>
            <h4>Spanish</h4>
            <ProgressBar>
              <div style={{ width: '80%' }}></div>
            </ProgressBar>
          </LanguageSkill>
          
          <LanguageSkill>
            <h4>French</h4>
            <ProgressBar>
              <div style={{ width: '40%' }}></div>
            </ProgressBar>
          </LanguageSkill>
        </CVSection>
        
        <CVSection>
          <SectionTitle>Awards & Achievements</SectionTitle>
          
          <CVEntry>
            <EntryHeader>
              <EntryTitle>Dean&apos;s List</EntryTitle>
              <EntryDate>2021 - Present</EntryDate>
            </EntryHeader>
            <EntryDescription>
              <p>Consistently maintained a GPA above 3.8, earning a place on the Dean&apos;s List for academic excellence.</p>
            </EntryDescription>
          </CVEntry>
          
          <CVEntry>
            <EntryHeader>
              <EntryTitle>BYU Merit Scholarship</EntryTitle>
              <EntryDate>2021 - Present</EntryDate>
            </EntryHeader>
            <EntryDescription>
              <p>Awarded a merit-based scholarship covering 75% of tuition for academic achievement and leadership potential.</p>
            </EntryDescription>
          </CVEntry>
          
          <CVEntry>
            <EntryHeader>
              <EntryTitle>2nd Place, BYU Hackathon</EntryTitle>
              <EntryDate>October 2022</EntryDate>
            </EntryHeader>
            <EntryDescription>
              <p>Led a team of four students to develop an innovative application for campus navigation using augmented reality, earning second place among 30 competing teams.</p>
            </EntryDescription>
          </CVEntry>
          
          <CVEntry>
            <EntryHeader>
              <EntryTitle>National Merit Finalist</EntryTitle>
              <EntryDate>2021</EntryDate>
            </EntryHeader>
            <EntryDescription>
              <p>Recognized as a National Merit Finalist based on outstanding PSAT/NMSQT scores and academic performance.</p>
            </EntryDescription>
          </CVEntry>
        </CVSection>
        
        <CVSection>
          <SectionTitle>Certifications</SectionTitle>
          
          <CVEntry>
            <EntryHeader>
              <EntryTitle>AWS Certified Developer - Associate</EntryTitle>
              <EntryDate>May 2023</EntryDate>
            </EntryHeader>
            <EntryDescription>
              <p>Certification demonstrating expertise in developing, deploying, and debugging cloud-based applications using AWS.</p>
            </EntryDescription>
          </CVEntry>
          
          <CVEntry>
            <EntryHeader>
              <EntryTitle>Microsoft Certified: Azure Fundamentals</EntryTitle>
              <EntryDate>January 2023</EntryDate>
            </EntryHeader>
            <EntryDescription>
              <p>Foundational certification validating understanding of cloud concepts, Azure services, security, privacy, compliance, and trust.</p>
            </EntryDescription>
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
