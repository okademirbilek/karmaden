import React from "react";
import Break from "../Break";

const Homeproduct = () => {
  return (
    <section className="px-8 pb-12 mx-auto mt-28  justify-center">
      <h2 className="text-4xl text-center font-light text-[#343a40] leading-tight tracking-[2px]">
        Kar Maden Marble Products
      </h2>
      <Break />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        <div className="home-product-container">
          <div className="home-product">
            <h2 className="md:text-right ">MARBLE TILES</h2>
            <p className="md:text-right ">
              Marble tiles are an exquisite & deluxe choice for just about any
              space in your home. Because marble is just like other natural
              stones; it is durable and really easy to clean.
            </p>
            <a className="md:text-right" href="#">
              See Marble Tiles Galerry
            </a>
          </div>
          <img
            src="https://i0.wp.com/karmaden.com/wp-content/uploads/2021/02/marble-tiles.jpg?fit=480%2C270&ssl=1"
            alt=""
          />
        </div>

        <div className="home-product-container ">
          <img
            src="https://i0.wp.com/karmaden.com/wp-content/uploads/2021/02/marble-slabs.jpg?fit=480%2C270&ssl=1"
            alt=""
          />
          <div className="home-product">
            <h2>MARBLE SLABS</h2>
            <p>
              Marble slabs are both modern and classic architectural material
              and is suitable for a variety of applications from countertops to
              building facades.
            </p>
            <a href="#">See Marble Slabs Gallery</a>
          </div>
        </div>

        <div className="home-product-container ">
          <div className="home-product">
            <h2 className="md:text-right ">MARBLE CLADDING</h2>
            <p className="md:text-right ">
              From the The Supreme Court Building in Washington to the The
              Leaning Tower of Pisa, marble has been used to create some of the
              most remarkable master pieces in the world. Let that legacy be a
              part of your home.
            </p>
            <a className="md:text-right " href="#">
              See Marble Claddings
            </a>
          </div>
          <img
            src="https://i0.wp.com/karmaden.com/wp-content/uploads/2021/02/black-marble-cladding.jpg?fit=480%2C270&ssl=1"
            alt=""
          />
        </div>

        <div className="home-product-container ">
          <img
            src="https://i0.wp.com/karmaden.com/wp-content/uploads/2021/02/black-marble-blocks.jpg?fit=480%2C270&ssl=1"
            alt=""
          />
          <div className="home-product">
            <h2 className="">MARBLE BLOCKS</h2>
            <p>
              Since it is a type of mine extracted in marble blocks, it is
              possible to sell blocks in accordance with the demand. Qualified
              studies are carried out on the quality of blocks of different
              sizes and weights.
            </p>
            <a href="#">See Marble Blocks Gallery</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeproduct;
