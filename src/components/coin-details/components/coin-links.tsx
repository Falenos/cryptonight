import React from "react";
import * as S from "../styled";
import LabelField from "./label-field";
import { Typography } from "@mui/material";
import { getValue } from "../../../utils";

const CoinLinks = ({
  coinLinks,
  communityData,
}: {
  coinLinks: CoinLinks;
  communityData: CommunityData;
}) => {
  return (
    <>
      <S.Label variant='h4'>Links</S.Label>
      {getValue(coinLinks.homepage) && (
        <LabelField
          label='Website'
          values={coinLinks.homepage[0]}
          href={coinLinks.homepage[0]}
        />
      )}
      {getValue(coinLinks.official_forum_url) && (
        <LabelField
          label='Forum'
          values={coinLinks.official_forum_url[0]}
          href={coinLinks.official_forum_url[0]}
        />
      )}
      {getValue(coinLinks.chat_url) && (
        <LabelField label='Chat'>
          {coinLinks.chat_url?.map((link, idx) => (
            <S.Link key={idx} href={link} noLinkStyle target='_blank'>
              <Typography fontFamily='Montserrat'>{link}</Typography>
            </S.Link>
          ))}
        </LabelField>
      )}

      <S.Label variant='h4'>Social:</S.Label>
      {!!coinLinks.subreddit_url && (
        <LabelField
          label='Reddit'
          values={coinLinks.subreddit_url}
          href={coinLinks.subreddit_url}
        />
      )}
      {!!communityData.reddit_subscribers && (
        <Typography>{communityData.reddit_subscribers} subscribers</Typography>
      )}

      {!!coinLinks.facebook_username && (
        <LabelField
          label='Facebook'
          href={`https://www.facebook.com/${coinLinks.facebook_username}`}
          values={coinLinks.facebook_username}
        />
      )}
      {!!communityData.facebook_likes && (
        <Typography>{communityData.facebook_likes} likes</Typography>
      )}

      {!!coinLinks.twitter_screen_name && (
        <LabelField
          label='Twitter'
          href={`https://twitter.com/${coinLinks.twitter_screen_name}`}
          values={coinLinks.twitter_screen_name}
        />
      )}
      {!!communityData.twitter_followers && (
        <Typography>{communityData.twitter_followers} followers</Typography>
      )}
    </>
  );
};

export default CoinLinks;
