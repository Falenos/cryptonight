import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import CoinDetails from "../components/coin-details";
import { SingleCoin } from "../../config/api";

export default function Page({
  coinData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <CoinDetails coinData={coinData} />;
}

// SSR for better performance and SEO
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log("context::", context.params?.id);
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const res = await fetch(SingleCoin((context.params?.id as string) || ""));
  const coinData: CoinFetchData = await res.json();
  console.log("data::", coinData);
  return {
    props: {
      coinData,
    },
  };
};
