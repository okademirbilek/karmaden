import Slider from "react-slick";
import SliderItem from "./SliderItem";
import React, { useState } from "react";

import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";
import { chevronRight } from "react-icons-kit/fa/chevronRight";

import "./slick.css";
import "./slick-theme.css";

import { AnimatePresence } from "framer-motion";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Icon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
      }}
      size={50}
      onClick={onClick}
      icon={chevronRight}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Icon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
      }}
      size={50}
      onClick={onClick}
      icon={chevronLeft}
    />
  );
}

function SlickSlider(props) {
  const [currentSlide, setCurrentSlide] = useState({
    activeSlide: 0,
    activeSlide2: 0,
  });
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: -1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    // fade: true,
    waitForAnimate: true,
    beforeChange: (current, next) => setCurrentSlide({ activeSlide: next }),
    afterChange: (current) => setCurrentSlide({ activeSlide2: current }),
    speed: 1000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const data = [
    {
      id: 1,
      url: "https://karmaden.com/wp-content/uploads/2023/02/kumlama-02-1.jpg",
      subTitle: "ancient heritage",
      title: "IBIZA WHITE",
      btnText1: "MUGLA WHITE",
      btnText2: "GET A QUOTE",
    },
    {
      id: 2,
      url: "https://i0.wp.com/karmaden.com/wp-content/uploads/2021/03/kar-maden-grey-marble-living-room.jpg?",
      subTitle: "a new modern grey marble",
      title: "PINETA BLACK",
      btnText1: "GRIGIO PINETA",
      btnText2: "GET A QUOTE",
    },
    {
      id: 3,
      url: "https://karmaden.com/wp-content/uploads/2021/03/kar-maden-black-marble-bathroom-design-1200x675.jpg",
      subTitle: "All Natural Stone",
      title: "DESIGN ELEMENTS",
      btnText1: "SEE COLLECTION",
      btnText2: "GET A QUOTE",
    },
    {
      id: 4,
      url: "https://karmaden.com/wp-content/uploads/2021/03/kar-maden-beige-marble-flooring-1200x675.jpg",
      subTitle: "a blend of beige marble",
      title: "CALACATTA LEYNE GOLD",
      btnText1: "BRECCIA LEYNE",
      btnText2: "GET A QUOTE",
    },
    {
      id: 5,
      url: "https://karmaden.com/wp-content/uploads/2021/03/kar-marden-black-white-marble-wall-cladding-1200x675.jpg",
      subTitle: "beauty of black & white marble",
      title: "BIANCO PINETA",
      btnText1: "BIANCO PINETA",
      btnText2: "GET A QUOTE",
    },
  ];
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <SliderItem
          key={item.id}
          index={index}
          currentSlide={currentSlide}
          data={item}
        />
      ))}
    </Slider>
  );
}

export default SlickSlider;
