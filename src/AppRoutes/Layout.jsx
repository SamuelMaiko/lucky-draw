import { Outlet } from "react-router-dom";
import Navbar from "../GeneralComponents/Navbar";
import Footer from "../GeneralComponents/Footer";

const Layout = () => {
  return (
    <div className=" font-poppins">
      <header className="sticky top-0">
        <Navbar />
      </header>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
