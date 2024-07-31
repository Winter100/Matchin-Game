import styled from "styled-components";
import { Character, CharacterBox, ItemContainer } from "./Item";

const ExtendedCharacterBoxConainter = styled(CharacterBox)`
  cursor: default;
  user-select: none;

  &:hover {
    background-color: white;
  }
`;

const Answer = ({ level }: { level: number }) => {
  const answerArray = [...Array(level).keys()];
  return (
    <ItemContainer>
      {answerArray.map((_, i) => (
        <ExtendedCharacterBoxConainter key={`answer-${i}`}>
          <Character>?</Character>
        </ExtendedCharacterBoxConainter>
      ))}
    </ItemContainer>
  );
};

export default Answer;
