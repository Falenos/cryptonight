import React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import HeaderStyled, { LinkStyled, ToolbarStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <AppBar color='transparent' position='static'>
        <Container>
          <ToolbarStyled>
            <LinkStyled href='/' noLinkStyle>
              <Typography variant='h6'>Crypto Watch</Typography>
            </LinkStyled>
          </ToolbarStyled>
        </Container>
      </AppBar>
    </HeaderStyled>
  );
};

export default Header;
