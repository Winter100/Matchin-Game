import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
`;

const Title = ({
  children = "맞추기 게임!",
}: {
  children: React.ReactNode;
}) => {
  return <H1>{children}</H1>;
};

export default Title;
