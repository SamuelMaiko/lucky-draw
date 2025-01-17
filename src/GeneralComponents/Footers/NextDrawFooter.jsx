import { Facebook, Instagram, Linkedin, Slack } from "lucide-react";
import React from "react";

const NextDrawFooter = () => {
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
    <div className="flex flex-col md:flex-row items-center justify-between md:py-0 py-[1rem] gap-3 md:gap-0  px-[2rem] md:h-[4.5rem] bg-lightGray">
      <div className="order-2 md:order-1">
        <p className="text-[13px] font-medium">
          &copy;2025 LuckyDraw. All rights reserved.
        </p>
      </div>
      <div className="text-white flex items-center gap-[1rem] order-1 md:order-2">
        <span>
          <Facebook className="text-orange" size={16} />
        </span>
        <span>
          <Slack className="text-orange" size={16} />
        </span>
        <span>
          <Instagram fill="orange" size={16} />
        </span>
      </div>
    </div>
  );
};

export default NextDrawFooter;
