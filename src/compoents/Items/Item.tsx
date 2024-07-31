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

export const CharacterBox = styled.div`
  border: 1px solid black;
  border-radius: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  cursor: pointer;

  &:hover {
    background-color: #fff0f0;
  }
`;

export const Character = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  font-size: 2rem;
`;

const Item = ({ level }: { level: number }) => {
  const { dispatch } = useMatching();
  const [length, setLength] = useState(() => {
    return customCharacter.slice(0, level);
  });
  const dropItem = useRef(0);

  const onDragStart = (index: number) => {
    dropItem.current = index;
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (dropIndex: number) => {
    if (dropItem.current === dropIndex) return;

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
  }, []);

  return (
    <ItemContainer>
      {length.map((item, i) => (
        <CharacterBox
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
