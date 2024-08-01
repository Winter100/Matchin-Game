import styled from "styled-components";
import Header from "./compoents/Header";
import MainSection from "./compoents/Section";
import SelectLevel from "./compoents/SelectLevel";

const Container = styled.div`
  height: 100%;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <SelectLevel />
      <MainSection />
    </Container>
  );
}
