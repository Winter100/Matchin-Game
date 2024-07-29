import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";
import Item from "./Items/Item";

const Container = styled.div``;

const StartGame = () => {
  const {
    state: { level },
  } = useMatching();
  return (
    <Container>
      <Item level={level} />
    </Container>
  );
};

export default StartGame;
