import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";
import StartGame from "./StartGame";
import Result from "./Result";

const MainContainer = styled.section`
  margin: auto;
  border: 1px solid gray;
  border-radius: 1rem;
  width: 1200px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const P = styled.p`
  font-weight: 300;
  font-size: 2rem;
`;

const MainSection = () => {
  const {
    state: { view },
  } = useMatching();
  return (
    <MainContainer>
      {view === "ready" && <P>난이도를 선택해주세요!</P>}
      {view === "start" && <StartGame />}
      {view === "result" && <Result />}
    </MainContainer>
  );
};

export default MainSection;
