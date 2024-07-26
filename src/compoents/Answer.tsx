import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";

const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const AnswerItem = styled.p`
  width: 50px;
  height: 50px;
`;

const Answer = () => {
  const { level } = useMatching();
  const answerArr = [...Array(level).fill(null)];
  return (
    <AnswerContainer>
      {answerArr.map((item, i) => (
        <AnswerItem key={i + 30}>{i}</AnswerItem>
      ))}
    </AnswerContainer>
  );
};

export default Answer;
