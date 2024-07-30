import styled from "styled-components";
import { Character, CharacterBox, ItemContainer } from "./Item";

const ExtendedItemConainter = styled(ItemContainer)`
  cursor: default;
  user-select: none;
`;

const Answer = ({ level }: { level: number }) => {
  const answerArray = [...Array(level).keys()];
  return (
    <ExtendedItemConainter>
      {answerArray.map((_, i) => (
        <CharacterBox key={`answer-${i}`}>
          <Character>?</Character>
        </CharacterBox>
      ))}
    </ExtendedItemConainter>
  );
};

export default Answer;
