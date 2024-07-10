//import ArtPieces from "@/components/ArtPieces";
import SpotLight from "@/components/SpotLight/SpotLight.js";
import useSWR from "swr";
export default function SpotLightPage({ pieces }) {
  /* const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const URL = "https://example-apis.vercel.app/api/art";

  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <h1>an error occured, plz try again later</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  if (!pieces) {
    return null;
  }*/
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
  return (
    <>
      {/* <ArtPieces pieces={pieces} />*/}
      <SpotLight piece={randomPiece} />
    </>
  );
}
