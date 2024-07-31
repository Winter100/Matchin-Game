import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";
import Item from "./Items/Item";
import Answer from "./Items/Answer";
import AnswerButton from "./AnswerButton";

const Container = styled.div`
  height: 90%;
`;

const StartGame = () => {
  const {
    state: { level },
  } = useMatching();

  return (
    <Container>
      <Item level={level} />
      <AnswerButton />
      <Answer level={level} />
    </Container>
  );
};

export default StartGame;
