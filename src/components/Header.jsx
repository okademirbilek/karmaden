import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    // bg-[#14141478]
    <header className="w-full py-2.5 px-10  bg-[#141414cc] border-b border-b-black fixed top-0 left-0 z-50 ">
      <nav className="">
        <ul className="flex items-center justify-center  gap-16 text-[#55a0f7] font-montserrat text-[12px] leading-[22px] tracking-[2px]">
          <li className="link-padding">
            <NavLink
              to="/story"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              OUR STORY
            </NavLink>
          </li>
          <li className="link-padding">
            <NavLink
              to="/products"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              PRODUCTS
            </NavLink>
          </li>
          <li className="link-padding">
            <NavLink
              to="/quarries"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              QUARRIES
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <img
                className="w-auto h-auto border-none max-h-[101.75px] max-w-[127.19px] mt-4 mb-8"
                src="https://karmaden.com/wp-content/uploads/2021/03/kar-maden-logo-2.png"
                alt="KARMADEN logo"
              />
            </NavLink>
          </li>
          <li className="link-padding">
            <NavLink
              to="/projects"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="link-padding">
            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              CONTACT US
            </NavLink>
          </li>
          <li className="link-padding">
            <div className="flex items-center gap-1 cursor-pointer">
              <img
                className="object-center w-[18px] h-[12px] aspect-[18/12]"
                src="https://karmaden.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                alt=""
              />
              ENGLISH
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
