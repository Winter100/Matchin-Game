import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";
import Item from "./Item";
import SelectLevel from "./SelectLevel";
import Answer from "./Answer";

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

const MainSection = () => {
  const { screen, level } = useMatching();
  return (
    <SectionContainer>
      {screen === 0 && <SelectLevel />}
      {screen === 1 && <Item ea={level} />}
      {screen === 1 && <Answer />}
    </SectionContainer>
  );
};

export default MainSection;
