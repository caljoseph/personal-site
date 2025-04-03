import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const SlideshowContainer = styled.div`
  flex: 0 0 300px;
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: var(--tag-background);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  font-weight: 500;
  
  @media (max-width: 768px) {
    flex: 0 0 auto;
    margin: 0 auto;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.div<{ $active: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transform: scale(${(props) => (props.$active ? 1 : 1.05)});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const NavigationArrows = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 2;
`;

const Arrow = styled.button`
  background-color: var(--primary);
  color: var(--text);
  border: 2px solid var(--border);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: var(--accent);
    color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    outline: none;
  }
`;

interface ProfileSlideshowProps {
  images: string[];
  alt: string;
}

const SlideshowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const ProfileSlideshow: React.FC<ProfileSlideshowProps> = ({ images, alt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showControls, setShowControls] = useState(images.length > 1);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  // Only show navigation arrows if there's more than one image
  if (images.length <= 1) {
    return (
      <SlideshowWrapper>
        <SlideshowContainer>
          <Image
            src={images[0]}
            alt={alt}
            fill
            sizes="300px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </SlideshowContainer>
      </SlideshowWrapper>
    );
  }

  return (
    <SlideshowWrapper>
      <SlideshowContainer>
        {images.map((src, index) => (
          <StyledImage key={src} $active={index === currentImageIndex}>
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              fill
              sizes="300px"
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          </StyledImage>
        ))}
      </SlideshowContainer>
      
      {showControls && (
        <NavigationArrows>
          <Arrow onClick={goToPrevious} aria-label="Previous image">
            ←
          </Arrow>
          <Arrow onClick={goToNext} aria-label="Next image">
            →
          </Arrow>
        </NavigationArrows>
      )}
    </SlideshowWrapper>
  );
};

export default ProfileSlideshow;