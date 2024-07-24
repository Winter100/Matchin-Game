import styled from "styled-components";

const ItemBox = styled.div`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Item = ({ ea = 5 }: { ea: number }) => {
  return (
    <ItemBox>
      {Array(ea)
        .fill(null)
        .map((_, i) => (
          <div>{i}</div>
        ))}
    </ItemBox>
  );
};

export default Item;
