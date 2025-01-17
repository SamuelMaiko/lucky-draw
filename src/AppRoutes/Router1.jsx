import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/page";
import NextDraw from "../pages/NextDraw/page";
import BuyTicket from "../pages/BuyTicket/page";
import Prize from "../pages/Prize/page";

const Router1 = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="next-draw" element={<NextDraw />} />
          <Route path="buy-ticket" element={<BuyTicket />} />
          <Route path="prize" element={<Prize />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router1;
