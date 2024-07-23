import { useRef, useState } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

const Li = styled.li`
  list-style: none;
  font-size: 2rem;
  border: 1px solid black;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const answer = ["A", "B", "C", "D", "E"];

const DragAndDropList = () => {
  const [items, setItems] = useState(["A", "B", "C", "D", "E"]);
  const [ea, setEa] = useState(0);
  const dropItem = useRef(0);

  const onDragStart = (index: number) => {
    dropItem.current = index;
  };

  const onDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const onDrop = (dropIndex: number) => {
    if (dropItem.current === dropIndex) return;

    const newArr = [...items];
    const item1 = items[dropItem.current];
    const item2 = items[dropIndex];

    newArr.splice(dropItem.current, 1, item2);
    newArr.splice(dropIndex, 1, item1);

    setItems(newArr);
  };

  const arraysEqual = () => {
    let resultEA = 0;

    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === items[i]) {
        resultEA = resultEA + 1;
      }
    }

    setEa(resultEA);
  };

  return (
    <div>
      <h1>위치 맞추기 게임!</h1>
      <button onClick={arraysEqual}>정답 확인</button>
      <p>{ea}</p>
      <Ul>
        {items.map((item, index) => (
          <Li
            key={index}
            draggable
            onDragStart={() => onDragStart(index)}
            onDragOver={onDragOver}
            onDrop={() => onDrop(index)}
            className="bg-blue-100 border border-blue-200 p-2 mb-2 rounded cursor-move hover:bg-blue-200 transition-colors"
          >
            {item}
          </Li>
        ))}
      </Ul>
      <Ul>
        {answer.map((item, index) => (
          <Li key={item + index}>{item}</Li>
        ))}
      </Ul>
    </div>
  );
};

export default DragAndDropList;
// import React, { useRef, useState } from "react";
// import styled from "styled-components";

// const Ul = styled.ul`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;
//   padding: 1rem;
// `;

// const Li = styled.li`
//   list-style: none;
//   font-size: 2rem;
//   border: 1px solid black;
//   width: 60px;
//   height: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const DragAndDropList = () => {
//   const [items, setItems] = useState(["A", "B", "C", "D", "E"]);
//   const start = useRef(0);

//   const onDragStart = (index: number) => {
//     start.current = index;
//     console.log(index);
//   };

//   const onDragOver = (e) => {
//     e.preventDefault();
//   };

//   const onDrop = (dropIndex: number) => {
//     if (start.current === dropIndex) return;

//     const newArr = [...items];
//     const item1 = items[start.current];
//     const item2 = items[dropIndex];

//     newArr.splice(start.current, 1, item2);
//     newArr.splice(dropIndex, 1, item1);

//     setItems(newArr);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-2xl font-bold mb-4">향상된 드래그 앤 드롭 리스트</h1>
//       <Ul className="bg-white shadow-md rounded-lg p-4 w-64">
//         {items.map((item, index) => (
//           <Li
//             key={index}
//             draggable
//             onDragStart={() => onDragStart(index)}
//             onDragOver={onDragOver}
//             onDrop={() => onDrop(index)}
//             className="bg-blue-100 border border-blue-200 p-2 mb-2 rounded cursor-move hover:bg-blue-200 transition-colors"
//           >
//             {item}
//           </Li>
//         ))}
//       </Ul>
//     </div>
//   );
// };

// export default DragAndDropList;
