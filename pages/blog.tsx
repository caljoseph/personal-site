import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import TypewriterHeading from "@/components/TypewriterHeading";
import { GetStaticProps } from 'next';
import { getAllContent, getFeaturedContent, BlogPost } from '@/lib/content';
import TagContainer from "@/components/TagContainer";
import Tag from "@/components/Tag";
import Image from 'next/image';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  
  @media (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 800px;
`;

const BlogList = styled.div`
  display: grid;
  @media (min-width: 768px) {
    gap: 2rem;
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
  position: relative;
  min-height: 300px;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const FeaturedPostContent = styled.div`
  flex: 1;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
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

const PostTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text);
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const PostDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
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

const BlogItem = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1rem;
  
  &:last-child {
    border-bottom: none;
  }
  
  > a {
    flex: 0 0 200px;
    display: block;
    height: 150px;
  }
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 0.5rem;
    margin-bottom: 2rem;
    
    > a {
      grid-row: 1;
      height: 200px;
      width: 100%;
    }
  }
`;

const BlogThumbnail = styled.div`
  height: 150px;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const BlogContent = styled.div`
  flex: 1;
  padding: 0.5rem 0;
  
  @media (max-width: 768px) {
    grid-row: 2;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 3rem 0 2rem 0;
  color: var(--text);
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-top: 2rem;
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

interface BlogPageProps {
  posts: BlogPost[];
  featuredPost: BlogPost | null;
}

const BlogPage = ({ posts, featuredPost }: BlogPageProps) => {
  // Filter out the featured post from regular posts list
  const regularPosts = featuredPost 
    ? posts.filter(post => post.id !== featuredPost.id)
    : posts;
  
  return (
    <Layout
      title="Blog | Caleb Bradshaw"
      description="Thoughts on computer science, mathematics, and software development"
    >
      <BlogContainer>
        <TypewriterHeading text="Blog " />
        <Subtitle>
          Thoughts on computer science, mathematics, and software development
        </Subtitle>
        
        {featuredPost && (
          <FeaturedPost>
            <FeaturedPostImage>
              <Image
                src={featuredPost.thumbnailUrl}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </FeaturedPostImage>
            <FeaturedPostContent>
              <FeaturedLabel>Featured</FeaturedLabel>
              <PostTitle>{featuredPost.title}</PostTitle>
              <PostMeta>
                <span>{featuredPost.formattedDate}</span>
                <span>{featuredPost.readingTime}</span>
              </PostMeta>
              <PostDescription>{featuredPost.description}</PostDescription>
              <TagContainer style={{marginBottom: '1.5rem'}}>
                {featuredPost.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagContainer>
              <Link href={`/blog/${featuredPost.id}`} passHref legacyBehavior>
                <ReadMoreLink>
                  Read Article <span>→</span>
                </ReadMoreLink>
              </Link>
            </FeaturedPostContent>
          </FeaturedPost>
        )}
        
        <SectionTitle>Posts</SectionTitle>
        
        <BlogList>
          {regularPosts.map(post => (
            <BlogItem key={post.id}>
              <Link href={`/blog/${post.id}`} passHref style={{ textDecoration: 'none', display: 'block' }}>
                <BlogThumbnail>
                  <Image
                    src={post.thumbnailUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    style={{ objectFit: 'cover' }}
                  />
                </BlogThumbnail>
              </Link>
              <BlogContent>
                <Link href={`/blog/${post.id}`} passHref style={{ textDecoration: 'none', color: 'var(--text)' }}>
                      <PostTitle>{post.title}</PostTitle>
                    </Link>
                <PostMeta>
                  <span>{post.formattedDate}</span>
                  <span>{post.readingTime}</span>
                </PostMeta>
                <PostDescription>{post.description}</PostDescription>
                <TagContainer style={{marginBottom: '1rem'}}>
                  {post.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagContainer>
                <Link href={`/blog/${post.id}`} passHref legacyBehavior>
                  <ReadMoreLink>
                    Read Article <span>→</span>
                  </ReadMoreLink>
                </Link>
              </BlogContent>
            </BlogItem>
          ))}
        </BlogList>
        
        {posts.length > 6 && (
          <SeeMoreButton>
            Load More Articles
          </SeeMoreButton>
        )}
      </BlogContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllContent<BlogPost>('blog');
  const featuredContent = getFeaturedContent('blog');
  
  return {
    props: {
      posts: allPosts,
      featuredPost: featuredContent.blogs[0] || null 
    }
  };
};

export default BlogPage;