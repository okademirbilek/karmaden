import React from "react";
import Break from "../Break";

const Homeproject = () => {
  return (
    <section className="px-8 pb-14 mx-auto mt-28  justify-center bg-[#333333]">
      <h2 className="text-4xl text-center font-light text-[#d6d6d6] leading-tight tracking-[2px] pt-[40px] pb-[10px]">
        Kar Maden Projects
      </h2>
      <Break />
      <nav className="mt-8">
        <ul className="flex justify-center gap-20 font-montserrat  text-[12px] leading-tight tracking-[2px] text-white">
          <li>
            <a
              className="bg-[#4FB8FF] text-[#333]  hover:bg-[#4FB8FF]  hover:text-[#333] px-1.5 py-1 transition duration-150  "
              href="#"
            >
              ALL PROJECTS
            </a>
          </li>
          <li>
            <a
              className=" hover:bg-[#4FB8FF]  hover:text-[#333] px-1.5 py-1 transition duration-150  "
              href="#"
            >
              KITCHEN
            </a>
          </li>
          <li>
            <a
              className=" hover:bg-[#4FB8FF]  hover:text-[#333] px-1.5 py-1 transition duration-150  "
              href="#"
            >
              OUTDOOR
            </a>
          </li>
          <li>
            <a
              className=" hover:bg-[#4FB8FF]  hover:text-[#333] px-1.5 py-1 transition duration-150  "
              href="#"
            >
              RESIDENTIAL
            </a>
          </li>
        </ul>
      </nav>
      <div className="home-project">
        <img
          src="https://i0.wp.com/karmaden.com/wp-content/uploads/2021/12/beige-marble-leyne-gold-home-project.jpg?fit=1280%2C720&ssl=1"
          alt=""
        />
        <img
          src="https://i0.wp.com/karmaden.com/wp-content/uploads/2021/03/sandblasted-marble-pool-house.jpg?fit=1280%2C720&ssl=1"
          alt=""
        />
        <img
          src="https://i0.wp.com/karmaden.com/wp-content/uploads/2021/03/bianco-pinata.marble-wall.jpg?fit=1280%2C720&ssl=1"
          alt=""
        />
        <img
          src="https://i0.wp.com/karmaden.com/wp-content/uploads/2021/03/grigio-pineta-interior-marble-design.jpg?fit=1280%2C720&ssl=1"
          alt=""
        />
      </div>
    </section>
  );
};

export default Homeproject;
