import styled from "styled-components";
import {
  Container,
  TableCell,
  LinearProgress,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
  Pagination,
} from "@mui/material";

const CoinsTableStyled = styled.div`
  font-family: Montserrat;
`;

export const TableRowStyled = styled(TableRow)`
  background-color: #16171a;
  cursor: pointer;
  font-family: Montserrat;

  &:hover {
    background-color: #131111;
  }
`;

export const TableCellStyled = styled(TableCell)`
  font-weight: 500;
  &.price-up {
    color: rgb(14, 203, 129);
  }
  &.price-down {
    color: red;
  }
`;

export const TableHeadCell = styled(TableCell)`
  color: black;
  font-weight: 700;
  font-family: Montserrat;
`;

export const PaginationStyled = styled(Pagination)`
  padding: 20;
  width: 100%;
  display: flex;
  justify-content: center;

  & .MuiPaginationItem-root {
    color: gold;
  }
`;

// export const LinkStyled = styled(Link)`
//   font-weight: bold;
//   cursor: pointer;
//   color: #18ffff;
//   text-decoration: none;
// `;

// export const ToolbarStyled = styled(Toolbar)`
//   display: flex;
//   justify-content: space-between;
// `;

export default CoinsTableStyled;
