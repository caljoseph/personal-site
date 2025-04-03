import React, { useState } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import TypewriterHeading from "@/components/TypewriterHeading";
import { GetStaticProps } from 'next';
import { getAllContent, getFeaturedContent, Project } from '@/lib/content';
import ContentCard from '@/components/ContentCard';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
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
    background-color: ${({ $isActive }) => $isActive ? 'var(--accent)' : 'var(--tag-background)'};
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

interface ProjectsPageProps {
  projects: (Project & { isFeatured?: boolean })[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Get unique categories from projects
  const uniqueCategories = projects.map(project => project.category);
  const categoriesSet = new Set(uniqueCategories);
  const categories = ['all', ...Array.from(categoriesSet)];

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
            A collection of academic, personal, and professional projects I&apos;ve
            worked on. These projects showcase my skills and interests in various
            areas of computer science and software development.
          </Subtitle>

          <FilterContainer>
            {categories.map(category => (
                <FilterButton
                    key={category}
                    $isActive={activeFilter === category}
                    onClick={() => setActiveFilter(category)}
                >
                  {category === 'all'
                      ? 'All Projects'
                      : category.charAt(0).toUpperCase() + category.slice(1)}
                </FilterButton>
            ))}
          </FilterContainer>

          <ProjectsGrid>
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                    <ContentCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.thumbnailUrl}
                        date={project.formattedDate}
                        tags={project.technologies || []}
                        type="project"
                        links={[
                          {
                            text: "Details",
                            href: `/projects/${project.id}`
                          },
                          ...(project.liveUrl ? [
                            {
                              text: "Live Demo",
                              href: project.liveUrl
                            }
                          ] : [])
                        ]}
                    />
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

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllContent<Project>('projects');

  return {
    props: {
      projects
    }
  };
};

export default ProjectsPage;