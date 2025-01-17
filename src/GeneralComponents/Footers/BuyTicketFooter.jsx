import { Facebook, Instagram, Slack } from "lucide-react";
import React from "react";

const BuyTicketFooter = () => {
  const footer_links = [
    {
      title: "Terms of Service",
      link: "#",
    },
    {
      title: "Privacy Policy",
      link: "#",
    },
    {
      title: "Contact Us",
      link: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center px-[2rem] h-[4.5rem] bg-lightGray">
      <ul className="flex gap-[1.2rem] text-[14px] font-medium ">
        {footer_links.map((link, index) => (
          <li key={index}>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuyTicketFooter;
