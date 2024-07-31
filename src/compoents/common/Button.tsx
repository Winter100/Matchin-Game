import styled from "styled-components";
import { useMatching } from "../../hooks/useMatching";

const Btn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  background-color: #ffc0cb;

  &:hover {
    background-color: #ff91af;
  }
`;
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
