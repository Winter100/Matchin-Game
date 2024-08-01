import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Score = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Result = () => {
  const {
    state: { numberOfAttempts },
  } = useMatching();
  return (
    <Container>
      <div>
        쉬움 난이도를 <Score>{numberOfAttempts}번</Score>만에 클리어 했습니다!
      </div>
    </Container>
  );
};

export default Result;
