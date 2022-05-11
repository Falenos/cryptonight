import styled from "styled-components";
import {
  TableCell as TC,
  TableRow as TR,
  Pagination as P,
} from "@mui/material";

export const TableRow = styled(TR)`
  background-color: #16171a;
  cursor: pointer;
  font-family: Montserrat;

  &:hover {
    background-color: #131111;
  }
`;

export const TableCell = styled(TC)`
  font-weight: 500;
  &.price-up {
    color: rgb(14, 203, 129);
  }
  &.price-down {
    color: red;
  }
`;

export const TableHeadCell = styled(TC)`
  color: black;
  font-weight: 700;
  font-family: Montserrat;
`;

export const TableCellMain = styled(TC)`
  display: flex !important;
  align-items: center;

  .coin-info-wrapper {
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    .symbol {
      text-transform: uppercase;
      font-size: 22;
    }

    .name {
      color: darkgray;
    }
  }
`;

export const Pagination = styled(P)`
  margin-top: 10px;
  padding: 20;
  width: 100%;
  display: flex;
  justify-content: center;

  & .MuiPaginationItem-root {
    color: gold;
  }
`;
