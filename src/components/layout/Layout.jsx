import Navbar from "./Navbar";
import Footer from "../WebPageComponents/Footer";

function Layout({ children, showFooter = true }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>

      {showFooter && <Footer />}
    </>
  );
}

export default Layout;