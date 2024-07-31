import styled from "styled-components";

import SelectLevel from "./SelectLevel";
import { useMatching } from "../hooks/useMatching";
import StartGame from "./StartGame";
import Result from "./Result";

const MainContainer = styled.section`
  min-width: 1440px;
  height: 90%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const MainSection = () => {
  const {
    state: { view },
  } = useMatching();
  return (
    <MainContainer>
      {view === "ready" && <SelectLevel />}
      {view === "start" && <StartGame />}
      {view === "result" && <Result />}
    </MainContainer>
  );
};

export default MainSection;
