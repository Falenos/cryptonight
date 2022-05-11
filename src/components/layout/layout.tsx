import Header from "./header/header";
import Footer from "./footer/footer";

type Props = { children: JSX.Element };

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
