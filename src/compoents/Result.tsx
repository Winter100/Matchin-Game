import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
        클리어까지
        <Score> {numberOfAttempts}번 </Score>시도했습니다.
      </div>
    </Container>
  );
};

export default Result;
