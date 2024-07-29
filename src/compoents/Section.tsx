import styled from "styled-components";

import SelectLevel from "./SelectLevel";
import { useMatching } from "../hooks/useMatching";
import StartGame from "./StartGame";
import Button from "./common/Button";

const MainContainer = styled.section`
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
  const {
    state: { view },
  } = useMatching();
  return (
    <MainContainer>
      <Button
        name="테스트"
        dispatchValue={{ type: "SET_VIEW", payload: "ready" }}
      />
      {view === "ready" && <SelectLevel />}
      {view === "start" && <StartGame />}
    </MainContainer>
  );
};

export default MainSection;
