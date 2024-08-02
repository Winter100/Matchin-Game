import styled from "styled-components";
import { useMatching } from "../hooks/useMatching";
import { convertLevel } from "../util/convertLevel";

const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button<{ $select?: boolean }>`
  cursor: pointer;
  border-radius: 1rem;
  border: 1px solid gray;
  background-color: ${(props) => (props.$select ? "black" : "white")};
  color: ${(props) => (props.$select ? "white" : "black")};
  width: 100px;
  height: 50px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const DIFFICULTY = [
  { type: "SET_LEVEL", payload: "nomal", value: "보통" },
  { type: "SET_LEVEL", payload: "hard", value: "어려움" },
  // { type: "SET_LEVEL", payload: "hell", value: "매우 어려움" },
];

const SelectLevel = () => {
  const {
    state: { level },
    dispatch,
  } = useMatching();

  return (
    <Container>
      <BtnBox>
        {DIFFICULTY.map((item) => (
          <Button
            $select={convertLevel(level) === item.payload}
            onClick={() => dispatch({ type: item.type, payload: item.payload })}
            key={item.payload}
          >
            {item.value}
          </Button>
        ))}
      </BtnBox>
    </Container>
  );
};

export default SelectLevel;
