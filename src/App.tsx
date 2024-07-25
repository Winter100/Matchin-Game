import MainSection from "./compoents/Section";
import Title from "./compoents/Title";

import SelectLevel from "./compoents/SelectLevel";
import MatchingProvider from "./context/MatchingProvider";

export default function App() {
  return (
    <MainSection>
      <MatchingProvider>
        <Title>매칭 게임!</Title>
        <SelectLevel />

        <div>매칭 될 물건들 자리..</div>

        <div>정답 보여줄 자리</div>
      </MatchingProvider>
    </MainSection>
  );
}
