import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CoinsTable from "../components/CoinsTable";
import { CoinList } from "../../config/api";

export default function Page({
  prefetchedData,
  dateTime,
}: {
  prefetchedData: any;
  dateTime: string;
}) {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography component='h2' color='secondary'>
          {dateTime}
        </Typography>
      </Box>
      <CoinsTable prefetchedData={prefetchedData} />
    </Container>
  );
}

// ISR: Static site revalidated after 20 secs
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
export const getStaticProps = async () => {
  const response = await fetch(CoinList());
  const data = await response.json();
  console.log("sample::", data[0]);
  const res2 = await fetch("https://worldtimeapi.org/api/ip");
  const res = await res2.json();
  return {
    props: {
      prefetchedData: data,
      dateTime: res.datetime,
    },
    revalidate: 20,
  };
};
