import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useMatching } from "../../hooks/useMatching";
import { customCharacter } from "../../constant/constant";

export const ItemContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CharacterBox = styled.div<{ $bgIndex: boolean }>`
  border: 1px solid gray;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => (props.$bgIndex ? "#e0ffe3" : "")};
  border-radius: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #d9d9d9;
    transform: translateY(-5px);
  }
`;

export const Character = styled.p`
  margin: 0px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const Item = ({ level }: { level: number }) => {
  const {
    state: { answer },
    dispatch,
  } = useMatching();
  const [length, setLength] = useState(() => customCharacter.slice(0, level));
  const dropItem = useRef(80);
  const endItem = useRef(80);

  const onDragStart = (index: number) => {
    dropItem.current = index;
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (dropIndex: number) => {
    if (dropItem.current === dropIndex) return;
    endItem.current = dropIndex;

    const newArr = [...length];
    const item1 = length[dropItem.current];
    const item2 = length[dropIndex];

    newArr.splice(dropItem.current, 1, item2);
    newArr.splice(dropIndex, 1, item1);

    dispatch({
      type: "SET_USER_ANSWER",
      payload: newArr.map((item) => item.i),
    });
    setLength(newArr);
  };

  useEffect(() => {
    dispatch({
      type: "SET_USER_ANSWER",
      payload: length.map((item) => item.i),
    });
  }, [answer, length, dispatch]);

  useEffect(() => {
    const sliceItem = customCharacter.slice(0, level);
    setLength(sliceItem);
  }, [level]);

  useEffect(() => {
    dropItem.current = 80;
    endItem.current = 80;
  }, [answer]);

  return (
    <ItemContainer>
      {length.map((item, i) => (
        <CharacterBox
          $bgIndex={dropItem.current === i || endItem.current === i}
          key={`items-${i}`}
          onDragStart={() => onDragStart(i)}
          onDragOver={onDragOver}
          onDrop={() => onDrop(i)}
          draggable
        >
          <Character>{item.character}</Character>
        </CharacterBox>
      ))}
    </ItemContainer>
  );
};

export default Item;
