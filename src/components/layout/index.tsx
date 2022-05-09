import Header from "./Header";
import Footer from "./Footer";

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
