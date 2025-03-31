import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';

const BlogContainer = styled.div`
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedPost = styled.div`
  grid-column: 1 / -1;
  background-color: var(--primary);
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  border: 1px solid var(--border);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeaturedPostImage = styled.div`
  flex: 0 0 40%;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: var(--text-secondary);
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const FeaturedPostContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

const FeaturedLabel = styled.span`
  display: inline-block;
  background-color: var(--accent);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PostCard = styled.div`
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

const PostImage = styled.div`
  height: 200px;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.2rem;
`;

const PostContent = styled.div`
  padding: 1.5rem;
`;

const PostTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text);
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const PostDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--accent);
  border-radius: 0.25rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
`;

const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #60a5fa;
  }
`;

const SeeMoreButton = styled.button`
  background-color: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
  padding: 0.75rem 2rem;
  font-weight: 600;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 3rem auto 0;
  display: block;
  
  &:hover {
    background-color: var(--accent);
    color: white;
  }
`;

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Optimizing Graph Algorithms: A Practical Approach',
    date: 'March 15, 2023',
    tags: ['Algorithms', 'Computer Science', 'Performance'],
    description: 'An exploration of practical techniques for optimizing graph algorithms in real-world applications, with code examples and performance benchmarks.',
    featured: true,
  },
  {
    id: 2,
    title: 'The Mathematics Behind Machine Learning Models',
    date: 'February 22, 2023',
    tags: ['Machine Learning', 'Mathematics', 'Data Science'],
    description: 'A deep dive into the mathematical foundations of popular machine learning models, from linear regression to neural networks.',
    featured: false,
  },
  {
    id: 3,
    title: 'Building Responsive UIs with React and Styled Components',
    date: 'January 10, 2023',
    tags: ['React', 'Web Development', 'UI/UX'],
    description: 'A comprehensive guide to creating beautiful, responsive user interfaces using React and styled-components, with practical examples.',
    featured: false,
  },
  {
    id: 4,
    title: 'Understanding Big O Notation and Algorithm Complexity',
    date: 'December 5, 2022',
    tags: ['Algorithms', 'Computer Science', 'Theory'],
    description: 'A beginner-friendly explanation of Big O notation and how it helps us analyze and compare algorithm efficiency.',
    featured: false,
  },
  {
    id: 5,
    title: 'Distributed Systems: Principles and Paradigms',
    date: 'November 18, 2022',
    tags: ['Distributed Systems', 'Architecture', 'Systems Design'],
    description: 'An introduction to the core principles of distributed systems and various paradigms for designing scalable, fault-tolerant applications.',
    featured: false,
  },
  {
    id: 6,
    title: 'Modern JavaScript Techniques for Cleaner Code',
    date: 'October 3, 2022',
    tags: ['JavaScript', 'Web Development', 'Clean Code'],
    description: 'Explore modern JavaScript techniques and best practices that can help you write cleaner, more maintainable code.',
    featured: false,
  },
];

const BlogPage = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  return (
    <Layout
      title="Blog | Caleb Bradshaw"
      description="Thoughts, tutorials, and insights on computer science, mathematics, and software development"
    >
      <BlogContainer>
        <PageTitle>Blog</PageTitle>
        <Subtitle>
          Thoughts, tutorials, and insights on computer science, mathematics, and software development. 
          I write about topics that interest me and share knowledge that might help others in the field.
        </Subtitle>
        
        {featuredPost && (
          <FeaturedPost>
            <FeaturedPostImage>
              <span>Featured Post Image</span>
            </FeaturedPostImage>
            <FeaturedPostContent>
              <FeaturedLabel>Featured</FeaturedLabel>
              <PostTitle>{featuredPost.title}</PostTitle>
              <PostMeta>
                <span>{featuredPost.date}</span>
              </PostMeta>
              <PostDescription>{featuredPost.description}</PostDescription>
              <TagContainer>
                {featuredPost.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagContainer>
              <Link href={`/blog/${featuredPost.id}`} passHref legacyBehavior>
                <ReadMoreLink>
                  Read Full Article <span>→</span>
                </ReadMoreLink>
              </Link>
            </FeaturedPostContent>
          </FeaturedPost>
        )}
        
        <BlogGrid>
          {regularPosts.map(post => (
            <PostCard key={post.id}>
              <PostImage>
                <span>Post Image</span>
              </PostImage>
              <PostContent>
                <PostTitle>{post.title}</PostTitle>
                <PostMeta>
                  <span>{post.date}</span>
                </PostMeta>
                <PostDescription>{post.description}</PostDescription>
                <TagContainer>
                  {post.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagContainer>
                <Link href={`/blog/${post.id}`} passHref legacyBehavior>
                  <ReadMoreLink>
                    Read More <span>→</span>
                  </ReadMoreLink>
                </Link>
              </PostContent>
            </PostCard>
          ))}
        </BlogGrid>
        
        <SeeMoreButton>
          Load More Articles
        </SeeMoreButton>
      </BlogContainer>
    </Layout>
  );
};

export default BlogPage;