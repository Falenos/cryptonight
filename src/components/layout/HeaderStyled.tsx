import styled from "styled-components";
import { Toolbar } from "@mui/material";
import Link from "../Link";

const HeaderStyled = styled.header`
  font-family: Montserrat;
`;

export const LinkStyled = styled(Link)`
  font-weight: bold;
  cursor: pointer;
  color: gold;
  text-decoration: none;
`;

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export default HeaderStyled;
