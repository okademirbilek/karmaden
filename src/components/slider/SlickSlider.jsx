import Slider from "react-slick";
import SliderItem from "./SliderItem";

import "./slick.css";
import "./slick-theme.css";

function SlickSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: -1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1480,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      // {
      //   breakpoint: 1185,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      // {
      //   breakpoint: 900,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     infinite: true,
      //     initialSlide: 0,
      //     dots: false,
      //   },
      // },
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
      url: "https://raoulkramer.de/content/images/size/w2000/2020/02/jon-tyson-P2aOvMMUJnY-unsplash.jpg",
    },
    {
      id: 2,
      url: "https://raw.githubusercontent.com/brave/brave-core/1.7.x/components/img/newtab/backgrounds/anders-jilden.webp",
    },
    {
      id: 3,
      url: "https://raw.githubusercontent.com/brave/brave-core/1.7.x/components/img/newtab/backgrounds/andreas-gucklhorn.webp",
    },
    {
      id: 4,
      url: "https://raw.githubusercontent.com/brave/brave-core/1.7.x/components/img/newtab/backgrounds/andy-mai.webp",
    },
    {
      id: 5,
      url: "https://raw.githubusercontent.com/brave/brave-core/1.7.x/components/img/newtab/backgrounds/anton-repponen.webp",
    },
  ];
  return (
    <Slider {...settings}>
      {data.map((item) => (
        <SliderItem key={item.id} data={item} />
      ))}
    </Slider>
  );
}

export default SlickSlider;
