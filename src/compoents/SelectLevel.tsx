import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";

const Container = styled.div`
  border: 1px solid black;
`;

const BtnBox = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const P = styled.p`
  margin: auto;
  text-align: center;
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
`;

const SelectLevel = () => {
  const { level, increase, decrease, setScreen } = useMatching();
  return (
    <Container>
      <P>난이도를 선택해주세요</P>
      <BtnBox>
        <Button onClick={decrease}>-</Button>
        <P>{level}</P>
        <Button onClick={increase}>+</Button>
      </BtnBox>
      <Button onClick={() => setScreen(1)}>확인</Button>
    </Container>
  );
};

export default SelectLevel;
