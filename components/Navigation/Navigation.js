import Link from "next/link";
import styled from "styled-components";
const Container = styled.ul`
  margin: auto;
  width: auto;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
`;
const StyledLink = styled(Link)`
  width: auto;
  height: 10px;
  background-color: black;
  color: white;
`;
export default function Navigation() {
  return (
    <Container>
      <StyledLink href="/">Spotlight</StyledLink>

      <StyledLink href="/art-pieces">Pieces</StyledLink>
    </Container>
  );
}
