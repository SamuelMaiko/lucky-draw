import React from "react";
import { useLocation } from "react-router-dom";
import HomeFooter from "./Footers/HomeFooter";
import NextDrawFooter from "./Footers/NextDrawFooter";
import BuyTicketFooter from "./Footers/BuyTicketFooter";
import PrizeFooter from "./Footers/PrizeFooter";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/" ? (
        <HomeFooter />
      ) : pathname === "/next-draw" ? (
        <NextDrawFooter />
      ) : pathname === "/buy-ticket" ? (
        <BuyTicketFooter />
      ) : pathname === "/prize" ? (
        <PrizeFooter />
      ) : (
        <h1>No footer for now</h1>
      )}
    </div>
  );
};

export default Footer;
