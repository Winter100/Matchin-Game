import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";

const Container = styled.table`
  margin: auto;
  width: 50rem;
  text-align: center;
  font-size: 2rem;
`;

const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th`
  font-size: 1.2rem;
  text-align: left;
  padding: 8px;
  text-align: center;
`;
const Td = styled(Th)`
  font-size: 1rem;
`;

const Score = () => {
  const {
    state: { numberOfAttempts, numberOfCorrectAnswers },
  } = useMatching();
  return (
    <Container>
      <Thead>
        <Tr>
          <Th>시도</Th>
          <Th>정답</Th>
        </Tr>
      </Thead>

      <Tbody>
        <Tr>
          <Td>{numberOfAttempts}</Td>
          <Td>{numberOfCorrectAnswers}</Td>
        </Tr>
      </Tbody>
    </Container>
  );
};

export default Score;
