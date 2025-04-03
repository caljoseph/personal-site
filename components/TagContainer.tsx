import styled from "styled-components";
import Tag from "@/components/Tag";

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }
`;

export default TagContainer;