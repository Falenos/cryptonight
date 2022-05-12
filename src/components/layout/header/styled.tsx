import styled from "styled-components";
import { Toolbar as T } from "@mui/material";
import L from "../../link";

export const Header = styled.header`
  font-family: Montserrat;
`;

export const Link = styled(L)`
  font-weight: bold;
  cursor: pointer;
  color: gold;
  text-decoration: none;
`;

export const Toolbar = styled(T)`
  display: flex;
  justify-content: space-between;
`;

export default Header;
