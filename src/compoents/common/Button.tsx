import styled from "styled-components";
import { useMatching } from "../../hooks/useMatching";

const Btn = styled.button``;
const Button = ({
  name,
  dispatchValue,
}: {
  name: string;
  dispatchValue: { type: string; payload: string };
}) => {
  const { dispatch } = useMatching();
  return <Btn onClick={() => dispatch(dispatchValue)}>{name}</Btn>;
};

export default Button;
