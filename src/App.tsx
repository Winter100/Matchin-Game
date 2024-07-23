import { useRef, useState } from "react";
import styled from "styled-components";
import DragAndDropList from "./compoents/DragAndDropList";

const Section = styled.section`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Box = styled.div`
  border: 1px solid black;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function App() {
  const [arr, setArr] = useState([1, 2, 3]);
  const startIdx = useRef(0);
  const endIdx = useRef(0);

  return (
    <Section>
      <DragAndDropList />
    </Section>
  );
}
// import { useRef, useState } from "react";

// export default function MoveBox() {
//   const dragItem = useRef(0);
//   const dragOverItem = useRef(0);
//   const [list, setList] = useState([
//     "Item 1",
//     "Item 2",
//     "Item 3",
//     "Item 4",
//     "Item 5",
//     "Item 6",
//   ]);

//   const dragStart = (idx: number) => {
//     dragItem.current = idx;
//   };

//   const dragEnter = (idx: number) => {
//     dragOverItem.current = idx;
//   };

//   const drop = () => {
//     const copyListItems = [...list];
//     const dragItemContent = copyListItems[dragItem.current];
//     copyListItems.splice(dragItem.current, 1);
//     copyListItems.splice(dragOverItem.current, 0, dragItemContent);
//     dragItem.current = 0;
//     dragOverItem.current = 0;
//     setList(copyListItems);
//     console.log("드랍");
//   };
//   return (
//     <>
//       {list &&
//         list.map((item, index) => (
//           <div
//             style={{
//               backgroundColor: "lightblue",
//               margin: "20px 25%",
//               textAlign: "center",
//               fontSize: "40px",
//             }}
//             onDragStart={() => dragStart(index)}
//             onDragEnter={() => dragEnter(index)}
//             onDragOver={(e) => e.preventDefault()}
//             onDragEnd={drop}
//             key={index}
//             draggable
//           >
//             {item}
//           </div>
//         ))}
//     </>
//   );
// }
