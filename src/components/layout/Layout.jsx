import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "../shared/ScrollToTop";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default Layout;
