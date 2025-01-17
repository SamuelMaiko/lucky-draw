import { Outlet } from "react-router-dom";
import Navbar from "../GeneralComponents/Navbar";
import Footer from "../GeneralComponents/Footer";

const Layout = () => {
  return (
    <div className="font-poppins">
      <header>
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
