import styled from "styled-components";
import { Typography as T } from "@mui/material";

export const Container = styled.div`
  /* display: flex;
  @media (min-width: 720px) {
    flex-direction: column;
    align-items: center;
  } */
`;

export const Sidebar = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25;
  padding-right: 10px;
  border-right: 2px solid grey;

  @media (max-width: 720px) {
    border: none;
    padding: 0;
    width: 100%;
  }
`;

export const Heading = styled(T)`
  font-weight: bold;
  margin-bottom: 20;
`;

export const Description = styled(T)`
  width: 100%;
  padding: 25;
  padding-bottom: 15;
  padding-top: 0;
  text-align: justify;

  a {
    color: gold;
  }
`;

export const MarketData = styled.div`
  align-self: start;
  padding: 25;
  padding-top: 10;
  width: 100%;

  & > * {
    display: flex;
  }

  @media (max-width: 720px) {
    display: flex;
    justify-content: space-around;
  }
  @media (max-width: 4800px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 320px) {
    align-items: start;
  }
`;
