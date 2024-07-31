import styled from "styled-components";
import Button from "./common/Button";
import { useMatching } from "../hooks/useMatching";
import NumberOfAttempts from "./NumberOfAttempts";

const Container = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NumberBox = styled.div`
  width: 400px;
`;

const MenuBox = () => {
  const {
    state: { view },
  } = useMatching();
  return (
    <Container>
      <Button
        name="메뉴"
        dispatchValue={{ type: "SET_VIEW", payload: "ready" }}
      />
      <NumberBox>{view === "start" && <NumberOfAttempts />}</NumberBox>
    </Container>
  );
};

export default MenuBox;
