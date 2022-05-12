import Header from "./header/header";
import Footer from "./footer/footer";
import { Container } from "@mui/material";

type Props = { children: JSX.Element };

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <main>{props.children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
