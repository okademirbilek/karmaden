import React from "react";
import Break from "../Break";
import HomeProjectImage from "./HomeProjectImage";
import HomeProjectLinks from "./HomeProjectLinks";

const Homeproject = () => {
  return (
    <section className="px-8 pb-14 mx-auto mt-28  justify-center bg-[#333333]">
      <h2 className="text-4xl text-center font-light text-[#d6d6d6] leading-tight tracking-[2px] pt-[40px] pb-[10px]">
        Kar Maden Projects
      </h2>
      <Break />
      <nav className="mt-8">
        <ul className="flex justify-center gap-20 font-montserrat   text-[12px] leading-tight tracking-[2px] text-white">
          <HomeProjectLinks title="ALL PROJECTS" current={true} />
          <HomeProjectLinks title="KITCHEN" current={false} />
          <HomeProjectLinks title=" OUTDOOR" current={false} />
          <HomeProjectLinks title="RESIDENTIAL" current={false} />
        </ul>
      </nav>
      <div className="home-project">
        <HomeProjectImage
          url={
            "https://i0.wp.com/karmaden.com/wp-content/uploads/2021/12/beige-marble-leyne-gold-home-project.jpg?fit=1280%2C720&ssl=1"
          }
          title="LEYNE GOLD GOME INTERIOR PROJECT"
          subTitle=""
        />
        <HomeProjectImage
          url={
            "https://i0.wp.com/karmaden.com/wp-content/uploads/2021/03/sandblasted-marble-pool-house.jpg?fit=1280%2C720&ssl=1"
          }
          title="SANDBLASTED MARBLE POOL HOUSE"
          subTitle="Outdoor"
        />
        <HomeProjectImage
          url={
            "https://i0.wp.com/karmaden.com/wp-content/uploads/2021/03/bianco-pinata.marble-wall.jpg?fit=1280%2C720&ssl=1"
          }
          title="BIANCO PINETA MARBLE WALL"
          subTitle=""
        />
        <HomeProjectImage
          url={
            "https://i0.wp.com/karmaden.com/wp-content/uploads/2021/03/grigio-pineta-interior-marble-design.jpg?fit=1280%2C720&ssl=1"
          }
          title="GRIGIO PINETA MARBLE LIVING ROOM"
          subTitle="Residental"
        />
      </div>
    </section>
  );
};

export default Homeproject;
