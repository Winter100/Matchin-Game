import styled from "styled-components";

const Section = styled.section`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const MainSection = ({ children }: { children: React.ReactNode }) => {
  return <Section>{children}</Section>;
};

export default MainSection;
