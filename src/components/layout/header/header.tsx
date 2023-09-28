import React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import * as S from "./styled";

const Header = () => {
  return (
    <S.Header>
      <AppBar color='transparent' position='static'>
        <S.Toolbar>
          <Container maxWidth='xl'>
            <S.Link href='/' noLinkStyle>
              <Typography variant='h4'>Cryptonight</Typography>
            </S.Link>
          </Container>
        </S.Toolbar>
      </AppBar>
    </S.Header>
  );
};

export default Header;
