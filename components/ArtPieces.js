import ArtPiecePreview from "./ArtPiecePreview.js";
export default function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces?.map((piece) => (
        <ArtPiecePreview piece={piece} key={piece.slug} />
      ))}
    </div>
  );
}
