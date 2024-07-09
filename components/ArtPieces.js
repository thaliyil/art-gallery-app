import ArtPiecePreview from "./ArtPiecePreview.js";
export default function ArtPieces({ pieces }) {
  //console.log("pieces is", pieces);
  /*  return (
    <div>
      <ul>
        {pieces?.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview piece={piece} />
          </li>
        ))}
      </ul>
    </div>
  );
} */
  return (
    <div>
      {pieces?.map((piece) => (
        <ArtPiecePreview piece={piece} key={piece.slug} />
      ))}
    </div>
  );
}
