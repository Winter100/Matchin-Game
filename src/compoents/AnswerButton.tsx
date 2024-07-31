import styled from "styled-components";
import Button from "./common/Button";

const Container = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const AnswerButton = () => {
  return (
    <Container>
      <Button
        name="정답 확인"
        dispatchValue={{ type: "ANSWER", payload: "" }}
      />
    </Container>
  );
};

export default AnswerButton;
