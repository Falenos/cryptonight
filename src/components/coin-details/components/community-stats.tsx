import React from "react";
import * as S from "../styled";
import LabelField from "./label-field";

const CommunityStats = ({
  developerData,
}: {
  developerData: DeveloperData;
}) => {
  return (
    <div>
      {!!developerData.forks && (
        <LabelField
          label='Forks'
          values={developerData.forks}
          variant='subtitle1'
        />
      )}
      {!!developerData.stars && (
        <LabelField
          label='Stars'
          values={developerData.stars}
          variant='subtitle1'
        />
      )}
      {!!developerData.subscribers && (
        <LabelField
          label='Subscribers'
          values={developerData.subscribers}
          variant='subtitle1'
        />
      )}
      {!!developerData.total_issues && (
        <LabelField
          label='Total issues'
          values={developerData.total_issues}
          variant='subtitle1'
        />
      )}
      {!!developerData.closed_issues && (
        <LabelField
          label='Closed issues'
          values={developerData.closed_issues}
          variant='subtitle1'
        />
      )}
      {!!developerData.pull_requests_merged && (
        <LabelField
          label='Merged PRs'
          values={developerData.pull_requests_merged}
          variant='subtitle1'
        />
      )}
      {!!developerData.pull_request_contributors && (
        <LabelField
          label='Contributors'
          values={developerData.pull_request_contributors}
          variant='subtitle1'
        />
      )}
    </div>
  );
};

export default CommunityStats;
