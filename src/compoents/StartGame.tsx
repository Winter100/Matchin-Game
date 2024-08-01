import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";
import Item from "./Items/Item";
import Answer from "./Items/Answer";
import AnswerButton from "./AnswerButton";
import Score from "./Score";

const Container = styled.div``;

const StartGame = () => {
  const {
    state: { level },
  } = useMatching();

  return (
    <Container>
      <Score />
      <Item level={level} />
      <AnswerButton />
      <Answer level={level} />
    </Container>
  );
};

export default StartGame;
