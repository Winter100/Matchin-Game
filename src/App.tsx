import styled from "styled-components";
import "./App.css";

const Section = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const Title = styled.h1`
  color: green;
  font-size: 5rem;
`;

const Input = styled.input<{ $inputColor?: string }>`
  padding: 0.5rem;
  color: ${(props) => props.$inputColor || "red"};
`;

const Button = styled.button<{ $primary?: boolean }>`
  font-size: 3rem;
  color: ${(props) => (props.$primary ? "green" : "#BF4F74")};
`;

function App() {
  return (
    <Section>
      <Title>테스트</Title>
      <Input defaultValue="기본값" type="text" />
      <Input defaultValue="기본값" type="button" />
      <Input type="checkbox" />
      <Button>테스트 버튼1</Button>
      <Button $primary>테스트 버튼2</Button>
    </Section>
  );
}

export default App;
