import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  text-align: center;
  padding: 0 2rem;
  background-color: var(--background);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  width: 100%;
  z-index: 1;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--text) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: var(--primary);
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 1rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const AboutContent = styled.div`
  flex: 1;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
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

const HighlightsSection = styled.section`
  padding: 5rem 2rem;
  background-color: var(--background);
`;

const HighlightsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HighlightsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
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

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const HighlightCard = styled.div`
  background-color: var(--primary);
  border-radius: 0.5rem;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text);
`;

const CardContent = styled.div`
  color: var(--text-secondary);
`;

const CardLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
  color: var(--accent);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #60a5fa;
  }
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background-color: var(--primary);
  text-align: center;
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <Name>Caleb Bradshaw</Name>
          <Title>Computer Science Student at BYU • Math Minor • Software Developer</Title>
          <p>
            Passionate about creating elegant solutions to complex problems through code. 
            Exploring the intersection of mathematics and computer science.
          </p>
          <ButtonGroup>
            <Link to="/projects" className="btn">View Projects</Link>
            <Link to="/cv" className="btn btn-outline">View CV</Link>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>
      
      <AboutSection>
        <AboutContainer>
          <AboutImage>
            <div style={{ width: '300px', height: '300px', backgroundColor: 'var(--secondary)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>Profile Image</span>
            </div>
          </AboutImage>
          <AboutContent>
            <AboutTitle>About Me</AboutTitle>
            <p>
              I'm a Computer Science student at Brigham Young University with a minor in Mathematics. 
              My passion lies in developing efficient algorithms, exploring data structures, and building 
              intuitive user interfaces. I'm particularly interested in the fields of web development, 
              machine learning, and computational mathematics.
            </p>
            <p style={{ marginTop: '1rem' }}>
              When I'm not coding or studying, you can find me hiking in the beautiful mountains 
              around Provo, playing basketball, or diving into a good book on technology and innovation.
            </p>
            <ButtonGroup style={{ justifyContent: 'flex-start' }}>
              <Link to="/about" className="btn">Learn More</Link>
            </ButtonGroup>
          </AboutContent>
        </AboutContainer>
      </AboutSection>
      
      <HighlightsSection>
        <HighlightsContainer>
          <HighlightsTitle>What I Do</HighlightsTitle>
          <HighlightsGrid>
            <HighlightCard>
              <CardTitle>Software Development</CardTitle>
              <CardContent>
                <p>
                  Building robust and scalable applications using modern technologies and best practices. 
                  From frontend to backend, I enjoy the full stack development process.
                </p>
              </CardContent>
              <CardLink to="/projects">
                View Projects <span>→</span>
              </CardLink>
            </HighlightCard>
            
            <HighlightCard>
              <CardTitle>Academic Research</CardTitle>
              <CardContent>
                <p>
                  Exploring cutting-edge topics in computer science and mathematics. 
                  Currently focused on algorithm optimization and computational complexity.
                </p>
              </CardContent>
              <CardLink to="/research">
                View Research <span>→</span>
              </CardLink>
            </HighlightCard>
            
            <HighlightCard>
              <CardTitle>Technical Writing</CardTitle>
              <CardContent>
                <p>
                  Sharing knowledge and insights through clear, accessible technical content. 
                  My blog covers topics from programming tutorials to mathematical concepts.
                </p>
              </CardContent>
              <CardLink to="/blog">
                Read Blog <span>→</span>
              </CardLink>
            </HighlightCard>
          </HighlightsGrid>
        </HighlightsContainer>
      </HighlightsSection>
      
      <CTASection>
        <CTAContainer>
          <CTATitle>Let's Connect</CTATitle>
          <CTADescription>
            Interested in collaborating on a project or just want to say hello? 
            Feel free to reach out - I'm always open to new opportunities and connections.
          </CTADescription>
          <Link to="/about#contact" className="btn">
            Get In Touch
          </Link>
        </CTAContainer>
      </CTASection>
    </>
  );
};

export default Home;