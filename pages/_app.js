import GlobalStyle from "../styles";
import ArtPieces from "@/components/ArtPieces";
import Layout from "@/components/Layout";
import useSWR from "swr";
//import { useState } from "react";
export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const URL = "https://example-apis.vercel.app/api/art";
  //const [pieces, setPieces] = useState([]);

  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <h1>an error occured, please try again </h1>;
  if (isLoading) return <h1>Loading...</h1>;

  if (!pieces) {
    return null;
  }
  console.log(pieces);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} pieces={pieces} />
      </Layout>
    </>
  );
}
