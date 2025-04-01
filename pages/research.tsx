import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import TypewriterHeading from "@/components/TypewriterHeading";
import Tag from "@/components/Tag";
import TagContainer from "@/components/TagContainer";

const ResearchContainer = styled.div`
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
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
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

const ResearchPage = () => {
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
        
        <ResearchSection>
          <SectionTitle>Current Research</SectionTitle>
          
          <ResearchCard>
            <ResearchTitle>Optimizing Graph Algorithms for Large-Scale Network Analysis</ResearchTitle>
            <ResearchMeta>
              <span>Advisor: <span className="highlight">Dr. Robert Johnson</span></span>
              <span>Period: <span className="highlight">2022 - Present</span></span>
              <span>Status: <span className="highlight">Ongoing</span></span>
            </ResearchMeta>
            <ResearchDescription>
              <p>
                This research focuses on developing more efficient algorithms for analyzing large-scale network data, 
                with applications in social network analysis, biological networks, and computer systems.
              </p>
              <p style={{ marginTop: '1rem' }}>
                We're currently exploring novel approaches to community detection and influence propagation in graphs with 
                millions of nodes, aiming to reduce computational complexity while maintaining accuracy. Our preliminary 
                results show a 40% improvement in processing time compared to state-of-the-art methods.
              </p>
            </ResearchDescription>
            <TagContainer>
              <Tag>Graph Theory</Tag>
              <Tag>Algorithm Optimization</Tag>
              <Tag>Network Analysis</Tag>
              <Tag>Parallel Computing</Tag>
            </TagContainer>
            <ResearchLinks>
              <ResearchLink href="#" target="_blank" rel="noopener noreferrer">
                Project Repository <span>→</span>
              </ResearchLink>
              <ResearchLink href="#" target="_blank" rel="noopener noreferrer">
                Interim Report <span>→</span>
              </ResearchLink>
            </ResearchLinks>
          </ResearchCard>
          
          <ResearchCard>
            <ResearchTitle>Machine Learning Approaches to Predicting Algorithm Complexity</ResearchTitle>
            <ResearchMeta>
              <span>Advisor: <span className="highlight">Dr. Sarah Williams</span></span>
              <span>Period: <span className="highlight">2023 - Present</span></span>
              <span>Status: <span className="highlight">Ongoing</span></span>
            </ResearchMeta>
            <ResearchDescription>
              <p>
                This project investigates the use of machine learning techniques to predict the computational complexity 
                of algorithms based on their source code and input characteristics. The goal is to develop a system that 
                can automatically analyze code and provide insights into its performance characteristics.
              </p>
              <p style={{ marginTop: '1rem' }}>
                We're building a dataset of annotated algorithms and their empirical performance metrics, which will be 
                used to train and evaluate various machine learning models. This research has potential applications in 
                code optimization, algorithm selection, and automated performance tuning.
              </p>
            </ResearchDescription>
            <TagContainer>
              <Tag>Machine Learning</Tag>
              <Tag>Computational Complexity</Tag>
              <Tag>Static Analysis</Tag>
              <Tag>Performance Prediction</Tag>
            </TagContainer>
            <ResearchLinks>
              <ResearchLink href="#" target="_blank" rel="noopener noreferrer">
                Project Details <span>→</span>
              </ResearchLink>
            </ResearchLinks>
          </ResearchCard>
        </ResearchSection>
        
        <ResearchSection>
          <SectionTitle>Publications</SectionTitle>
          
          <PublicationsList>
            <PublicationItem>
              <PublicationTitle>Efficient Community Detection in Large-Scale Social Networks</PublicationTitle>
              <PublicationAuthors>
                <span>Bradshaw, C.</span>, Johnson, R., Smith, A.
              </PublicationAuthors>
              <PublicationVenue>
                IEEE International Conference on Network Analysis (ICNA), 2023 - Under Review
              </PublicationVenue>
              <PublicationAbstract>
                <p>
                  This paper presents a novel approach to community detection in large-scale social networks, combining 
                  parallel computing techniques with optimized graph algorithms. We demonstrate that our method scales 
                  linearly with the number of edges in the graph, making it suitable for analyzing networks with millions 
                  of nodes and billions of edges.
                </p>
                <p>
                  Experimental results on both synthetic and real-world datasets show that our approach achieves comparable 
                  or better community detection quality than existing methods while significantly reducing computational time.
                </p>
              </PublicationAbstract>
              <ResearchLinks>
                <ResearchLink href="#" target="_blank" rel="noopener noreferrer">
                  Preprint <span>→</span>
                </ResearchLink>
              </ResearchLinks>
            </PublicationItem>
            
            <PublicationItem>
              <PublicationTitle>A Comparative Study of Algorithm Performance Prediction Methods</PublicationTitle>
              <PublicationAuthors>
                Williams, S., Chen, L., <span>Bradshaw, C.</span>
              </PublicationAuthors>
              <PublicationVenue>
                Journal of Computational Performance, Vol. 15, Issue 2, 2023
              </PublicationVenue>
              <PublicationAbstract>
                <p>
                  This study compares various approaches to predicting algorithm performance based on code characteristics 
                  and input parameters. We evaluate traditional analytical methods alongside machine learning-based 
                  techniques, including regression models, neural networks, and ensemble methods.
                </p>
                <p>
                  Our results indicate that ensemble methods combining static code analysis with runtime feature extraction 
                  achieve the highest prediction accuracy across a diverse set of algorithms and input distributions.
                </p>
              </PublicationAbstract>
              <ResearchLinks>
                <ResearchLink href="#" target="_blank" rel="noopener noreferrer">
                  Full Paper <span>→</span>
                </ResearchLink>
                <ResearchLink href="#" target="_blank" rel="noopener noreferrer">
                  Dataset <span>→</span>
                </ResearchLink>
              </ResearchLinks>
            </PublicationItem>
          </PublicationsList>
        </ResearchSection>
        
        <ResearchSection>
          <SectionTitle>Academic Presentations</SectionTitle>
          
          <ResearchCard>
            <ResearchTitle>Scalable Algorithms for Network Analysis in the Era of Big Data</ResearchTitle>
            <ResearchMeta>
              <span>Event: <span className="highlight">BYU Computer Science Symposium</span></span>
              <span>Date: <span className="highlight">November 2023</span></span>
              <span>Type: <span className="highlight">Poster Presentation</span></span>
            </ResearchMeta>
            <ResearchDescription>
              <p>
                Presented ongoing research on scalable algorithms for analyzing large-scale networks, focusing on 
                techniques that enable efficient processing of graphs with millions of nodes and billions of edges.
              </p>
              <p style={{ marginTop: '1rem' }}>
                The presentation highlighted our novel parallel processing approach and demonstrated its application 
                to real-world social network datasets, showing significant performance improvements over traditional methods.
              </p>
            </ResearchDescription>
            <ResearchLinks>
              <ResearchLink href="#" target="_blank" rel="noopener noreferrer">
                Presentation Slides <span>→</span>
              </ResearchLink>
              <ResearchLink href="#" target="_blank" rel="noopener noreferrer">
                Poster <span>→</span>
              </ResearchLink>
            </ResearchLinks>
          </ResearchCard>
          
          <ResearchCard>
            <ResearchTitle>Machine Learning for Code Performance Prediction</ResearchTitle>
            <ResearchMeta>
              <span>Event: <span className="highlight">Utah Conference on Artificial Intelligence</span></span>
              <span>Date: <span className="highlight">March 2023</span></span>
              <span>Type: <span className="highlight">Oral Presentation</span></span>
            </ResearchMeta>
            <ResearchDescription>
              <p>
                Delivered a talk on our research using machine learning to predict algorithm performance based on 
                code characteristics and input features. The presentation covered our methodology, dataset creation, 
                model selection, and preliminary results.
              </p>
              <p style={{ marginTop: '1rem' }}>
                The talk also discussed potential applications in automatic code optimization and algorithm selection, 
                generating significant interest and valuable feedback from the research community.
              </p>
            </ResearchDescription>
            <ResearchLinks>
              <ResearchLink href="#" target="_blank" rel="noopener noreferrer">
                Presentation Recording <span>→</span>
              </ResearchLink>
              <ResearchLink href="#" target="_blank" rel="noopener noreferrer">
                Slides <span>→</span>
              </ResearchLink>
            </ResearchLinks>
          </ResearchCard>
        </ResearchSection>
      </ResearchContainer>
    </Layout>
  );
};

export default ResearchPage;