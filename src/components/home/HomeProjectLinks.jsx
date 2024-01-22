import React, { useState } from "react";

const HomeProjectLinks = ({ title, current }) => {
  return (
    <li className="home-project-links flex items-center">
      <a
        className={`px-1.5 py-1 ${current && "bg-[#4fb8ff] text-[#333]"}`}
        href="#"
      >
        {title}
      </a>
    </li>
  );
};

export default HomeProjectLinks;
