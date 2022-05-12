import React from "react";
import * as S from "../styled";
import LabelField from "./label-field";
import Spacer from "../../spacer";
import { formatNumber } from "../../../utils";

const Performance = ({ marketData }: { marketData: MarketData }) => {
  return (
    <S.Performance>
      <S.Label width='100%' variant='h4'>
        Performance
      </S.Label>
      {/* <S.Label>Price Change:</S.Label> */}
      <LabelField
        label='24 hours'
        values={marketData.price_change_percentage_24h}
        variant='subtitle1'
        isPercentage
        isColoured
      />
      <Spacer />
      <LabelField
        label='7 days'
        values={marketData.price_change_percentage_7d}
        variant='subtitle1'
        isPercentage
        isColoured
      />
      <Spacer />
      <LabelField
        label='14 days'
        values={marketData.price_change_percentage_14d}
        variant='subtitle1'
        isPercentage
        isColoured
      />
      <Spacer />
      <LabelField
        label='30 days'
        values={marketData.price_change_percentage_30d}
        variant='subtitle1'
        isPercentage
        isColoured
      />
      <Spacer />
      <LabelField
        label='60 days'
        values={marketData.price_change_percentage_60d}
        variant='subtitle1'
        isPercentage
        isColoured
      />
      <Spacer />
      <LabelField
        label='200 days'
        values={marketData.price_change_percentage_200d}
        variant='subtitle1'
        isPercentage
        isColoured
      />
      <Spacer />
      <LabelField
        label='1 year'
        values={marketData.price_change_percentage_1y}
        variant='subtitle1'
        isPercentage
        isColoured
      />
      <Spacer />
      <LabelField
        label='24 hours high'
        values={marketData.high_24h.usd}
        variant='subtitle1'
      />
      <Spacer />
      <LabelField
        label='24 hours low'
        values={marketData.low_24h.usd}
        variant='subtitle1'
      />
      <Spacer />
      <LabelField
        label='All time high'
        values={[
          `${formatNumber(marketData.ath.usd)}$`,
          new Date(marketData.ath_date.usd).toUTCString(),
        ]}
        variant='subtitle1'
      />
      <Spacer />
      <LabelField
        label='All time low'
        values={[
          `$${formatNumber(marketData.atl.usd)}$`,
          new Date(marketData.atl_date.usd).toUTCString(),
        ]}
        variant='subtitle1'
      />
    </S.Performance>
  );
};

export default Performance;
