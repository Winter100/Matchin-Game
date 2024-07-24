import MainSection from "./compoents/Section";
import Title from "./compoents/Title";
import Item from "./compoents/Item";
import Input from "./compoents/Input";

export default function App() {
  return (
    <MainSection>
      <Title>맞추기 게임!</Title>
      <Item ea={5} />
      <Input />
      {/* <DragAndDropList /> */}
    </MainSection>
  );
}
