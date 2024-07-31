import styled from "styled-components";
import Header from "./compoents/Header";
import MainSection from "./compoents/Section";
import MenuBox from "./compoents/MenuBox";

const Container = styled.div`
  height: 90dvh;
  margin: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <MenuBox />
      <MainSection />
    </Container>
  );
}
