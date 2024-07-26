import { useRef, useState } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Character = styled.p`
  border: 1px solid black;
  width: 50px;
  height: 50px;
`;

const Item = ({ ea = 5 }: { ea: number }) => {
  const [length, setLength] = useState(() => [...Array(ea).keys()]);
  const dropItem = useRef(0);

  const onDragStart = (index: number) => {
    dropItem.current = index;
  };

  const onDragOver = (e: React.DragEvent<HTMLParagraphElement>) => {
    e.preventDefault();
  };

  const onDrop = (dropIndex: number) => {
    if (dropItem.current === dropIndex) return;

    const newArr = [...length];
    const item1 = length[dropItem.current];
    const item2 = length[dropIndex];

    newArr.splice(dropItem.current, 1, item2);
    newArr.splice(dropIndex, 1, item1);

    setLength(newArr);
  };

  return (
    <ItemContainer>
      {length.map((item, i) => (
        <Character
          key={i}
          onDragStart={() => onDragStart(i)}
          onDragOver={onDragOver}
          onDrop={() => onDrop(i)}
          draggable
        >
          {item}
        </Character>
      ))}
    </ItemContainer>
  );
};

export default Item;
