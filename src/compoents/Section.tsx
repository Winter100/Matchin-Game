import styled from "styled-components";

const SectionContainer = styled.section`
  border: 1px solid black;
  margin: auto;
  max-width: 1440px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const MainSection = ({ children }: { children: React.ReactNode }) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export default MainSection;
