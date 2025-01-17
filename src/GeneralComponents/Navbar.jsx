import { Menu, Star, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
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
      <ul className="md:flex gap-[1.2rem] font-medium hidden">
        {nav_links.map((link, index) => (
          <NavLink key={index} to={link.link}>
            <li>{link.title}</li>
          </NavLink>
        ))}
      </ul>
      <button
        onClick={() => setOpenSidebar(true)}
        className="border-white border-[1px] p-1 hover:bg-[rgba(255,255,255,0.2)] md:hidden"
      >
        <Menu size={26} />
      </button>
      {/* mobile side bar */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-[50%] bg-beige md:hidden block ${
          openSidebar ? "" : "translate-x-full"
        } transition-transform duration-500`}
      >
        <button
          onClick={() => setOpenSidebar(false)}
          className="border-orange border-[1px] p-1 mt-3 ml-3 text-orange transition-colors duration-300 hover:bg-[rgba(255,255,255,0.2)]"
        >
          <X size={22} />
        </button>
        <div className="w-full px-3 mt-4">
          {nav_links.map((link, index) => (
            <NavLink key={index} to={link.link}>
              <div
                onClick={() => setOpenSidebar(false)}
                className="text-orange py-2 hover:bg-white pl-2 rounded-md font-medium transition-colors duration-300 mb-2"
              >
                {link.title}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
