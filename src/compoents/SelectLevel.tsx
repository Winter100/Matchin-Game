import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";

const Container = styled.div`
  height: 80%;
  padding-top: 3rem;
  margin: auto;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const H2 = styled.h2`
  margin: auto;
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #ffe9e9;
  border-radius: 25rem;
  border: none;
  width: 200px;
  height: 50px;
`;

const SelectLevel = () => {
  const { dispatch } = useMatching();

  return (
    <Container>
      <H2>난이도를 선택해주세요</H2>
      <BtnBox>
        <Button
          onClick={() => dispatch({ type: "SET_LEVEL", payload: "nomal" })}
        >
          쉬움
        </Button>
        <Button
          onClick={() => dispatch({ type: "SET_LEVEL", payload: "hard" })}
        >
          어려움
        </Button>
        <Button
          onClick={() => dispatch({ type: "SET_LEVEL", payload: "hard" })}
        >
          매우 어려움
        </Button>
      </BtnBox>
    </Container>
  );
};

export default SelectLevel;
