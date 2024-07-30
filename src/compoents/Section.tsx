import styled from "styled-components";

import SelectLevel from "./SelectLevel";
import { useMatching } from "../hooks/useMatching";
import StartGame from "./StartGame";
import Button from "./common/Button";

const MainContainer = styled.section`
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
    state: { view, answerEa },
  } = useMatching();
  return (
    <MainContainer>
      <Button
        name="이전"
        dispatchValue={{ type: "SET_VIEW", payload: "ready" }}
      />
      <Button
        name="정답 확인"
        dispatchValue={{ type: "ANSWER", payload: "" }}
      />
      {answerEa}
      {view === "ready" && <SelectLevel />}
      {view === "start" && <StartGame />}
    </MainContainer>
  );
};

export default MainSection;
