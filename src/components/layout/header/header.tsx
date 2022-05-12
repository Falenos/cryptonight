import React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import * as S from "./styled";

const Header = () => {
  return (
    <S.Header>
      <AppBar color='transparent' position='static'>
        <Container maxWidth='xl'>
          <S.Toolbar>
            <S.Link href='/' noLinkStyle>
              <Typography variant='h4'>Crypto Watch</Typography>
            </S.Link>
          </S.Toolbar>
        </Container>
      </AppBar>
    </S.Header>
  );
};

export default Header;
