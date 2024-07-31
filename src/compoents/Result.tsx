import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Result = () => {
  const {
    state: { numberOfAttempts },
  } = useMatching();
  return <Container>{`정답까지 ${numberOfAttempts}번 걸렸어요!`}</Container>;
};

export default Result;
