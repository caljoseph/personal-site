import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@/components/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import { format } from 'date-fns';
import TagContainer from '@/components/TagContainer';
import Tag from '@/components/Tag';
import { getAllContentPaths, getContentById, BlogPost } from '@/lib/content';

// Styled components for the blog post page
const BlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 5rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const PostHeader = styled.div`
  margin-bottom: 3rem;
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PostMeta = styled.div`
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
  height: 400px;
  position: relative;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const PostContent = styled.div`
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

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  if (!post) {
    return (
      <Layout title="Post Not Found | Caleb Bradshaw">
        <BlogPostContainer>
          <p>Sorry, the post you're looking for couldn't be found.</p>
        </BlogPostContainer>
      </Layout>
    );
  }

  return (
    <Layout 
      title={`${post.title} | Caleb Bradshaw's Blog`}
      description={post.description}
    >
      <BlogPostContainer>
        <BackLink href="/blog">
          ← Back to Blog
        </BackLink>
        
        <PostHeader>
          <PostTitle>{post.title}</PostTitle>
          <PostMeta>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
              {post.author}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"/>
              </svg>
              {post.formattedDate}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM10 8.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H9V6a.5.5 0 0 1 1 0v2.5z"/>
              </svg>
              {post.readingTime}
            </span>
          </PostMeta>
          <TagContainer>
            {post.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
        </PostHeader>
        
        <ThumbnailContainer>
          <Image 
            src={post.thumbnailUrl} 
            alt={post.title} 
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </ThumbnailContainer>
        
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </BlogPostContainer>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllContentPaths('blog');
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getContentById<BlogPost>('blog', params?.id as string);
  
  if (!post) {
    return {
      notFound: true
    };
  }
  
  return {
    props: {
      post
    }
  };
};