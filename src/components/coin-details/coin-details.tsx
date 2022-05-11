import { Typography } from "@mui/material";
import Image from "next/image";
// import { useEffect, useState } from "react";
// import ReactHtmlParser from "react-html-parser";
// import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../../utils";
import * as S from "./styled";

const CoinDetails = ({ coinData }: { coinData: CoinFetchData }) => {
  // const { currency, symbol } = CryptoState();

  // useEffect(() => {
  //   fetchCoin();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const formatMarketCap = numberWithCommas(
    coinData?.market_data.market_cap.usd.toString().slice(0, -6)
  );

  return (
    <S.Container>
      <S.Sidebar>
        <Image
          src={coinData?.image.large}
          alt={coinData?.name}
          width='200'
          height='200'
        />
        <S.Heading variant='h3' fontFamily='Montserrat'>
          {coinData?.name}
        </S.Heading>
        <S.Description
          variant='subtitle1'
          fontFamily='Montserrat'
          dangerouslySetInnerHTML={{ __html: coinData?.description?.en }}
        />
        <S.MarketData>
          <span>
            <S.Heading variant='h6'>Rank:</S.Heading>
            &nbsp; &nbsp;
            <Typography variant='h6' fontFamily='Montserrat'>
              {numberWithCommas(coinData?.market_cap_rank)}
            </Typography>
          </span>
          <span>
            <S.Heading variant='h6'>Current Price:</S.Heading>
            &nbsp; &nbsp;
            <Typography variant='h6' fontFamily='Montserrat'>
              {"$"} {numberWithCommas(coinData?.market_data.current_price.usd)}
            </Typography>
          </span>
          <span>
            <S.Heading variant='h6'>Market Cap:</S.Heading>
            &nbsp; &nbsp;
            <Typography variant='h6' fontFamily='Montserrat'>
              {"$"} {numberWithCommas(formatMarketCap)}M
            </Typography>
          </span>
        </S.MarketData>
      </S.Sidebar>
    </S.Container>
  );
};

export default CoinDetails;
