import styled from "styled-components";
import { Typography as T } from "@mui/material";
import L from "../Link";

export const Container = styled.div`
  display: flex;
  img {
    object-fit: contain;
  }

  @media (max-width: 720px) {
    flex-wrap: wrap;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Performance = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const CoinChart = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ChartContainer = styled.div`
  /* width: 40%; */
`;

export const Sidebar = styled.div`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  margin-top: 25;
  padding: 10px;
  border-right: 2px solid black;

  @media (max-width: 720px) {
    border: none;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const LabelField = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-bottom: 6px;
  word-wrap: break-word;
  text-overflow: ellipsis;
  line-break: anywhere;

  .children-wrapper {
    flex-grow: 1;
  }
`;

export const SingleValue = styled(T)`
  &.is-up {
    color: rgb(14, 203, 129);
  }

  &.is-down {
    color: red;
  }
`;

export const Label = styled(T)`
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 10px;
  border-top: 4px solid white;
`;

export const FieldLabel = styled(T)`
  font-weight: bold;
`;

export const Link = styled(L)`
  cursor: pointer;
  color: gold;
  text-decoration: none;
  font-family: Montserrat;
  font-size: 1.2em;
`;

export const Description = styled(T)`
  padding: 0 10px;
  width: 100%;
  margin-bottom: 10px !important;
  padding-top: 0;
  text-align: justify;

  a {
    color: gold;
  }
`;
