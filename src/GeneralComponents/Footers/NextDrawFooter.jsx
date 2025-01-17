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
    <div className="flex items-center justify-between px-[2rem] h-[4.5rem] bg-lightGray">
      <div>
        <p className="text-[13px] font-medium">
          &copy;2025 LuckyDraw. All rights reserved.
        </p>
      </div>
      <div className="text-white flex items-center gap-[1rem]">
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
