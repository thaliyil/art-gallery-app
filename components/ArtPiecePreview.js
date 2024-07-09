import Image from "next/image";
import styled from "styled-components";
export default function ArtPiecePreview({ piece }) {
  const StyledContainer = styled.li`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  `;

  const StyledInfo = styled.p`
    font-size: 1rem;
    color: red;
  `;

  const StyledTitle = styled.h2`
    font-size: 2rem;
  `;

  // const { imageSource: image, artist: artist, name: title } = piece;
  return (
    <StyledContainer>
      <StyledTitle> {piece.name}</StyledTitle>
      <Image
        src={piece.imageSource}
        width={360}
        height={0}
        style={{ width: "auto", height: "auto" }}
        alt={piece.name}
      />

      <StyledInfo>{piece.artist}</StyledInfo>
    </StyledContainer>
  );
}
