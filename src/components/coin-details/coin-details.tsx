import { Typography } from "@mui/material";
import Image from "next/image";
import { formatNumber, getValue } from "../../utils";
import Performance from "./components/performance";
import LabelField from "./components/label-field";
import CommunityStats from "./components/community-stats";
import CoinLinks from "./components/coin-links";
import * as S from "./styled";

const CoinDetails = ({ coinData }: { coinData: CoinFetchData }) => {
  const formatMarketCap = formatNumber(
    coinData?.market_data.market_cap.usd.toString().slice(0, -6)
  );

  return (
    <S.Container>
      <S.Sidebar>
        <Typography variant='h3' fontFamily='Montserrat'>
          {coinData?.name}
        </Typography>
        <Image
          src={coinData?.image.large}
          alt={coinData?.name}
          width='200'
          height='200'
        />
        <LabelField
          label='Rank'
          values={formatNumber(coinData?.market_cap_rank)}
        />
        <LabelField
          label='Current Price'
          values={formatNumber(coinData?.market_data.current_price.usd, 2)}
          withCurrency
        />
        <LabelField
          label='Market Cap'
          values={formatNumber(formatMarketCap)}
          inTheMillions
          withCurrency
        />
        <LabelField
          label='Votes'
          values={[
            `up ${coinData.sentiment_votes_up_percentage}%`,
            `down ${coinData.sentiment_votes_down_percentage}%`,
          ]}
        />

        <CoinLinks
          coinLinks={coinData.links}
          communityData={coinData.community_data}
        />

        <S.Label variant='h4'>Community</S.Label>
        {getValue([
          ...coinData.links.repos_url.github,
          ...coinData.links.repos_url.bitbucket,
        ]) && (
          <LabelField label='Repositories'>
            {[
              ...coinData.links.repos_url.github,
              ...coinData.links.repos_url.bitbucket,
            ].map((link, idx) => (
              <S.Link key={idx} href={link} noLinkStyle target='_blank'>
                <Typography fontFamily='Montserrat'>{link}</Typography>
              </S.Link>
            ))}
          </LabelField>
        )}
        <CommunityStats developerData={coinData.developer_data} />
      </S.Sidebar>

      <S.Wrapper>
        <S.Description
          variant='subtitle1'
          dangerouslySetInnerHTML={{ __html: coinData?.description?.en }}
        />
        <Performance marketData={coinData.market_data} />
        <S.ChartContainer />
      </S.Wrapper>
    </S.Container>
  );
};

export default CoinDetails;
