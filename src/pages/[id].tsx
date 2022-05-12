import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CoinDetails from "../components/coin-details";
import { SingleCoin } from "../../config/api";

const SContainer = styled.div`
  display: flex;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Page({
  coinData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Container maxWidth='xl'>
      {/* <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography component='h2' color='secondary'>
          {JSON.stringify(coinData)}
        </Typography>
      </Box> */}
      <SContainer>
        <CoinDetails coinData={coinData} />
        {/* <div>CHART</div> */}
      </SContainer>
    </Container>
  );
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
/*
 The current price of the coin (market_data.current_price.{currency})
● A description !loc
● Contact links (webpage, forum, etc) __ base
● Social media links
● Possible statistics of some social media (facebook likes, twitter followers etc.) __community_data
● Github statistics (forks, stars, subscribers, issues) __developer
● Reputation score __base
  ○ Up votes (see sentiment_votes_up_percentage attribute)
  ○ Down votes (see sentiment_votes_dows_percentage attribute)
● Price change on the last __market
  24 hours,
  7 days,
  14 days,
  1 month,
  2 months,
  200 days,
  1 year
● The highest price on the last day (high_24h) __market
● The lowest price on the last day (low_24h) __market
● The highest price since the creation of the coin (ath) and the date (ath_date) __market
● The lowest price since the creation of the coin (atl) and the date (atl_date) __market
*/
