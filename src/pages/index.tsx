import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CoinsTable from "../components/coins-table";
import { CoinList } from "../../config/api";
import { formatDate } from "../utils";

export default function Page({
  prefetchedData,
  dateTime,
}: {
  prefetchedData: MarketsFetchData[];
  dateTime: string;
}) {
  return (
    <>
      <Box
        sx={{
          my: 5,
          display: "flex",
          justifyContent: "center",
        }}>
        <Typography component='h2' color='secondary'>
          Last render at {formatDate(dateTime)}
        </Typography>
      </Box>
      <CoinsTable prefetchedData={prefetchedData} />
    </>
  );
}

// ISR: Static site revalidated after 20 secs
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
export const getStaticProps = async () => {
  const response = await fetch(CoinList());
  const data: MarketsFetchData[] = await response.json();
  // console.log("sample::", data[0]);
  const timeRes = await fetch("https://worldtimeapi.org/api/ip");
  const time = await timeRes.json();
  return {
    props: {
      prefetchedData: data,
      dateTime: time.datetime,
    },
    revalidate: 20,
  };
};
