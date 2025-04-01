import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import TagContainer from '@/components/TagContainer';
import Tag from '@/components/Tag';
import { getAllContentPaths, getContentById, Project } from '@/lib/content';
import CTAButton from '@/components/CTAButton';
import OutlineButton from '@/components/OutlineButton';

// Styled components for the project page
const ProjectContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectMeta = styled.div`
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
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ProjectContent = styled.div`
  color: var(--text);
  line-height: 1.8;
  
  h2 {
    font-size: 1.75rem;
    margin: 2rem 0 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 1.75rem 0 0.75rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  blockquote {
    border-left: 4px solid var(--accent);
    padding-left: 1rem;
    margin-left: 0;
    color: var(--text-secondary);
    font-style: italic;
  }
  
  code {
    background-color: var(--secondary);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', monospace;
  }
  
  pre {
    background-color: var(--secondary);
    padding: 1rem;
    border-radius: 0.25rem;
    overflow-x: auto;
    margin-bottom: 1.5rem;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.25rem;
    margin: 1.5rem 0;
  }
  
  a {
    color: var(--accent);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #60a5fa;
      text-decoration: underline;
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--accent);
  border-radius: 0.25rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent);
    color: white;
  }
`;

const LiveDemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  background-color: #000;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent);
  }
`;

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  margin-bottom: 2rem;
  
  &:hover {
    color: #60a5fa;
  }
`;

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  if (!project) {
    return (
      <Layout title="Project Not Found | Caleb Bradshaw">
        <ProjectContainer>
          <p>Sorry, the project you&apos;re looking for couldn&apos;t be found.</p>
        </ProjectContainer>
      </Layout>
    );
  }

  return (
    <Layout 
      title={`${project.title} | Caleb Bradshaw's Projects`}
      description={project.description}
    >
      <ProjectContainer>
        <BackLink href="/projects">
          ← Back to Projects
        </BackLink>
        
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectMeta>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
              {project.formattedDate}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
              </svg>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </ProjectMeta>
          <TagContainer>
            {project.technologies.map(tech => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </TagContainer>
        </ProjectHeader>
        
        <ThumbnailContainer>
          <Image 
            src={project.thumbnailUrl} 
            alt={project.title} 
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </ThumbnailContainer>
        
        <ProjectContent dangerouslySetInnerHTML={{ __html: project.content }} />
        
        <ProjectLinks>
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" style={{marginRight: '1rem'}}>
              <OutlineButton>
                <span style={{marginRight: '0.5rem'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </span>
                View Code
              </OutlineButton>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <CTAButton>
                <span style={{marginRight: '0.5rem'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                </span>
                Live Demo
              </CTAButton>
            </a>
          )}
        </ProjectLinks>
      </ProjectContainer>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentPaths('projects');
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = getContentById<Project>('projects', params?.id as string);
  
  if (!project) {
    return {
      notFound: true
    };
  }
  
  return {
    props: {
      project
    }
  };
};