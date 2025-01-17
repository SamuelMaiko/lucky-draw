import { Facebook, Instagram, Slack } from "lucide-react";
import React from "react";

const HomeFooter = () => {
  const footer_links = [
    {
      title: "Privacy Policy",
      link: "#",
    },
    {
      title: "Terms of Service",
      link: "#",
    },
    {
      title: "Contact Us",
      link: "#",
    },
  ];

  return (
    <div className="flex items-center justify-between px-[2rem] h-[4.5rem] bg-lightGray">
      <div>
        <ul className="flex gap-[1.2rem] text-[14px] font-medium ">
          {footer_links.map((link, index) => (
            <li key={index}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-white flex items-center gap-[1rem]">
        <span>
          <Facebook className="text-black" size={16} />
        </span>
        <span>
          <Slack className="text-black" size={16} />
        </span>
        <span>
          <Instagram fill="black" size={16} />
        </span>
      </div>
    </div>
  );
};

export default HomeFooter;
