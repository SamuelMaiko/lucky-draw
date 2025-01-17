import React from "react";

const PrizeFooter = () => {
  const footer_links = [
    {
      title: "About Us",
      link: "#",
    },
    {
      title: "FAQs",
      link: "#",
    },
    {
      title: "Contact",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-2 py-[1rem] px-[2rem] bg-orange text-white">
      <a href="#" className="text-[14px]">
        Explore More
      </a>
      <ul className="flex gap-[1.2rem] text-[14px] font-medium ">
        {footer_links.map((link, index) => (
          <li key={index}>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div>
        <p className="text-[13px] font-medium">
          &copy;2025 LuckyDraw. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrizeFooter;
