import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
  }
  
  div {
    width: 300px;
    height: 300px;
    background-color: var(--secondary);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCategory = styled.div`
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--text);
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 40px;
      height: 2px;
      background-color: var(--accent);
    }
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
  margin-top: 4rem;
  padding-top: 4rem;
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

const About: React.FC = () => {
  return (
    <AboutContainer>
      <PageTitle>About Me</PageTitle>
      
      <ProfileSection>
        <ProfileImage>
          <div>
            <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>Profile Image</span>
          </div>
        </ProfileImage>
        
        <ProfileContent>
          <p>
            Hello! I'm Caleb Bradshaw, a passionate Computer Science student at Brigham Young University with a minor in Mathematics. 
            I'm dedicated to solving complex problems and building innovative solutions through code.
          </p>
          
          <p>
            My journey in computer science began when I was in high school, where I discovered my passion for 
            programming through creating simple games and websites. This early interest evolved into a deep fascination 
            with algorithms, data structures, and the mathematical foundations of computing.
          </p>
          
          <p>
            At BYU, I've had the opportunity to explore various areas of computer science, from web development 
            and mobile applications to artificial intelligence and computational theory. I'm particularly drawn to 
            the intersection of mathematics and computer science, exploring how mathematical concepts can be applied 
            to solve computational problems efficiently.
          </p>
          
          <p>
            Outside of academics, I'm an avid hiker, basketball player, and technology enthusiast. I believe in 
            continuous learning and am always excited to take on new challenges and projects that push the boundaries 
            of my knowledge and skills.
          </p>
        </ProfileContent>
      </ProfileSection>
      
      <SectionTitle>My Skills</SectionTitle>
      <SkillsGrid>
        <SkillCategory>
          <h3>Programming Languages</h3>
          <SkillList>
            <li>JavaScript/TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>SQL</li>
          </SkillList>
        </SkillCategory>
        
        <SkillCategory>
          <h3>Web Development</h3>
          <SkillList>
            <li>React.js</li>
            <li>Node.js</li>
            <li>HTML5/CSS3</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
          </SkillList>
        </SkillCategory>
        
        <SkillCategory>
          <h3>Tools & Technologies</h3>
          <SkillList>
            <li>Git/GitHub</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </SkillList>
        </SkillCategory>
        
        <SkillCategory>
          <h3>Other Skills</h3>
          <SkillList>
            <li>Algorithm Design</li>
            <li>Data Structures</li>
            <li>Machine Learning</li>
            <li>Linear Algebra</li>
            <li>Agile Methodologies</li>
          </SkillList>
        </SkillCategory>
      </SkillsGrid>
      
      <SectionTitle>Education & Experience</SectionTitle>
      <TimelineContainer>
        <TimelineItem>
          <TimelineDate>2021 - Present</TimelineDate>
          <TimelineTitle>Bachelor of Science in Computer Science</TimelineTitle>
          <TimelineSubtitle>Brigham Young University, Provo, UT</TimelineSubtitle>
          <TimelineContent>
            <p>Minor in Mathematics. Focusing on algorithm design, data structures, and software engineering principles.</p>
            <p>Relevant coursework includes: Advanced Algorithms, Machine Learning, Database Systems, Web Development, and Linear Algebra.</p>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineDate>Summer 2023</TimelineDate>
          <TimelineTitle>Software Engineering Intern</TimelineTitle>
          <TimelineSubtitle>Tech Innovations Inc., Salt Lake City, UT</TimelineSubtitle>
          <TimelineContent>
            <p>Developed and maintained web applications using React and Node.js. Collaborated with a team of developers to implement new features and fix bugs.</p>
            <p>Created RESTful APIs to connect frontend and backend services, improving data retrieval efficiency by 30%.</p>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineDate>2022 - Present</TimelineDate>
          <TimelineTitle>Research Assistant</TimelineTitle>
          <TimelineSubtitle>BYU Computer Science Department</TimelineSubtitle>
          <TimelineContent>
            <p>Working with Dr. Johnson on algorithm optimization research, focusing on improving computational efficiency in graph-based problems.</p>
            <p>Implemented and analyzed various algorithms, contributing to a research paper currently under review.</p>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineDate>2021 - 2022</TimelineDate>
          <TimelineTitle>Teaching Assistant</TimelineTitle>
          <TimelineSubtitle>BYU Department of Computer Science</TimelineSubtitle>
          <TimelineContent>
            <p>Assisted professors in teaching introductory programming courses. Conducted lab sessions, graded assignments, and provided one-on-one help to students.</p>
            <p>Developed supplementary teaching materials to help students better understand complex programming concepts.</p>
          </TimelineContent>
        </TimelineItem>
      </TimelineContainer>
      
      <ContactSection id="contact">
        <SectionTitle>Get In Touch</SectionTitle>
        <p style={{ color: 'var(--text-secondary)' }}>
          I'm always open to new opportunities, collaborations, or just a friendly chat about technology and innovation. Feel free to reach out through any of the channels below.
        </p>
        
        <ContactGrid>
          <ContactCard>
            <ContactCardTitle>Email</ContactCardTitle>
            <ContactInfo>
              <a href="mailto:caleb.bradshaw@example.com">caleb.bradshaw@example.com</a>
              <p>Feel free to email me for any inquiries or opportunities.</p>
            </ContactInfo>
          </ContactCard>
          
          <ContactCard>
            <ContactCardTitle>Social Media</ContactCardTitle>
            <ContactInfo>
              <p>Connect with me on professional networks:</p>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
            </ContactInfo>
          </ContactCard>
          
          <ContactCard>
            <ContactCardTitle>Location</ContactCardTitle>
            <ContactInfo>
              <p>Based in Provo, Utah</p>
              <p>Available for remote work and collaborations worldwide</p>
            </ContactInfo>
          </ContactCard>
        </ContactGrid>
      </ContactSection>
    </AboutContainer>
  );
};

export default About;
