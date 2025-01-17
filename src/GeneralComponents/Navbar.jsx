import { Star } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const nav_links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Next Draw",
      link: "/next-draw",
    },
    {
      title: "Buy Ticket",
      link: "/buy-ticket",
    },
    {
      title: "Result",
      link: "/prize",
    },
  ];

  return (
    <div className="font-poppins bg-orange text-white h-[5rem] w-full flex justify-between items-center px-[2rem]">
      <div className="flex gap-2">
        <span>
          <Star size={22} fill="white" />
        </span>
        <p className="font-bold">LuckyDraw</p>
      </div>
      <ul className="flex gap-[1.2rem] font-medium">
        {nav_links.map((link, index) => (
          <NavLink key={index} to={link.link}>
            <li>{link.title}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
