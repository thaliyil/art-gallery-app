import ArtPieces from "@/components/ArtPieces";
import SpotLight from "@/components/SpotLight/SpotLight.js";
import useSWR from "swr";
export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";

  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);
  // console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
  console.log("pieces from top", pieces);
  return (
    <div>
      {/* <h1>Art Gallery...</h1>
      <ArtPieces pieces={pieces} /> */}
      <SpotLight piece={randomPiece} />
    </div>
  );
}
