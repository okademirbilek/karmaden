import React from "react";

import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/fa/facebook";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { instagram } from "react-icons-kit/fa/instagram";
import { envelope } from "react-icons-kit/fa/envelope";

const Footer = () => {
  const links = [
    "HOME",
    "QUARRIES",
    "MARBLE TYPES",
    "CURT TO SIZE MARBLES",
    "MARBLE BLOCK",
    "MARBLE SURFACE FINISHES",
    "PROJECTS",
    "CATALOGS",
    "DOWNLOADABLE CONTENT",
    "CONTACT US",
    "KART ART MARBLE",
    "MARBLE ANALYSIS REPORTS",
  ];
  return (
    <footer>
      <nav className="flex items-center justify-around bg-[#333333]  py-14 ">
        <img
          src="https://karmaden.com/wp-content/uploads/2021/03/kar-maden-logo.png "
          alt=""
        />

        <div className=" flex items-center justify-center max-w-[930px] min-h-24   ">
          <ul className="flex flex-wrap justify-center items-center gap-2">
            {links.map((item) => {
              return (
                <div key={item} className="flex items-center justify-center">
                  <li>
                    <a
                      className="text-[12px] text-[#aaaaaa] leading-[22px] font-montserrat tracking-[1px]"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                  <br className="mx-6" />
                </div>
              );
            })}
          </ul>
        </div>

        <div className="social flex gap-1">
          <div>
            <Icon icon={facebook} size={16} style={{ color: "#fff" }} />
          </div>
          <div>
            <Icon icon={linkedin} size={16} style={{ color: "#fff" }} />
          </div>
          <div>
            <Icon icon={instagram} size={16} style={{ color: "#fff" }} />
          </div>
          <div>
            <Icon icon={envelope} size={16} style={{ color: "#fff" }} />
          </div>
        </div>
      </nav>

      <div className="flex justify-center py-3 bg-[#262626]">
        <h3 className="text-[13px] text-[#999]">
          Copyright &copy; 2023 Kar Maden
        </h3>
      </div>

      <div className="mb-4 h-[75px] mt-2 bg-white flex gap-2 justify-center">
        <h4 className="cursor-pointer">English</h4>
        <h4 className="cursor-pointer">Türkçe</h4>
      </div>
    </footer>
  );
};

export default Footer;
