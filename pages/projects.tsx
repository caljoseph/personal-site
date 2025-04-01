import React, { useState } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import TypewriterHeading from "@/components/TypewriterHeading";
import Tag from "@/components/Tag";
import TagContainer from "@/components/TagContainer";

const ProjectsContainer = styled.div`
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

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: 0.5rem 1.5rem;
  background-color: ${({ $isActive }) => $isActive ? 'var(--accent)' : 'transparent'};
  color: ${({ $isActive }) => $isActive ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${({ $isActive }) => $isActive ? 'var(--accent)' : 'var(--border)'};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${({ $isActive }) => $isActive ? '600' : '400'};
  
  &:hover {
    background-color: ${({ $isActive }) => $isActive ? 'var(--accent)' : 'rgba(59, 130, 246, 0.1)'};
    color: ${({ $isActive }) => $isActive ? 'white' : 'var(--accent)'};
    border-color: var(--accent);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: var(--primary);
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.2rem;
  
  //img {
  //  width: 100%;
  //  height: 100%;
  //  object-fit: cover;
  //}
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
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

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
  grid-column: 1 / -1;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text);
  }
`;

// Project data
const projects = [
  {
    id: 1,
    title: 'Algorithm Visualization Platform',
    description: 'An interactive web application for visualizing various algorithms, including sorting, graph traversal, and pathfinding algorithms.',
    tags: ['React', 'TypeScript', 'D3.js'],
    category: 'web',
    image: '/project-placeholder.jpg',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Personal Finance Tracker',
    description: 'A full-stack application for tracking personal finances, including expense categorization, budget planning, and visualization of spending patterns.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'web',
    image: '/project-placeholder.jpg',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Machine Learning for Stock Prediction',
    description: 'Implementation of various machine learning algorithms to predict stock market trends using historical data.',
    tags: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    category: 'ai',
    image: '/project-placeholder.jpg',
    liveUrl: null,
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'Distributed Computing Framework',
    description: 'A framework for distributing computational tasks across multiple machines, optimizing for performance and fault tolerance.',
    tags: ['Java', 'Docker', 'RabbitMQ'],
    category: 'systems',
    image: '/project-placeholder.jpg',
    liveUrl: null,
    repoUrl: '#',
  },
  {
    id: 5,
    title: 'AR Campus Navigation',
    description: 'An augmented reality application for navigating the BYU campus, providing real-time directions and information about buildings and facilities.',
    tags: ['Unity', 'C#', 'ARKit', 'ARCore'],
    category: 'mobile',
    image: '/project-placeholder.jpg',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 6,
    title: 'Computational Geometry Library',
    description: 'A library implementing various computational geometry algorithms, including convex hull, Delaunay triangulation, and Voronoi diagrams.',
    tags: ['C++', 'OpenGL'],
    category: 'systems',
    image: '/project-placeholder.jpg',
    liveUrl: null,
    repoUrl: '#',
  },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <Layout
      title="Projects | Caleb Bradshaw"
      description="View Caleb Bradshaw's portfolio of projects spanning web development, machine learning, and more"
    >
      <ProjectsContainer>
        <TypewriterHeading text="My Projects " />
        <Subtitle>
          A collection of academic, personal, and professional projects I've
          worked on. These projects showcase my skills and interests in various
          areas of computer science and software development.
        </Subtitle>

        <FilterContainer>
          <FilterButton
            $isActive={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </FilterButton>
          <FilterButton
            $isActive={activeFilter === 'web'}
            onClick={() => setActiveFilter('web')}
          >
            Web Development
          </FilterButton>
          <FilterButton
            $isActive={activeFilter === 'mobile'}
            onClick={() => setActiveFilter('mobile')}
          >
            Mobile Apps
          </FilterButton>
          <FilterButton
            $isActive={activeFilter === 'ai'}
            onClick={() => setActiveFilter('ai')}
          >
            AI & ML
          </FilterButton>
          <FilterButton
            $isActive={activeFilter === 'systems'}
            onClick={() => setActiveFilter('systems')}
          >
            Systems & Algorithms
          </FilterButton>
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectImage>
                  {/*<img src={project.image} alt={project.title} />*/}
                  <span>Project Image</span>
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TagContainer>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagContainer>
                  <ProjectLinks>
                    {project.repoUrl && (
                      <ProjectLink
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub <span>→</span>
                      </ProjectLink>
                    )}
                    {project.liveUrl && (
                      <ProjectLink
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <span>→</span>
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))
          ) : (
            <EmptyState>
              <h3>No projects found</h3>
              <p>
                There are currently no projects in this category. Check back
                later or try a different category.
              </p>
            </EmptyState>
          )}
        </ProjectsGrid>
      </ProjectsContainer>
    </Layout>
  );
};

export default ProjectsPage;