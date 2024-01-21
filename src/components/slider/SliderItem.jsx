import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variantTitle = {
  hidden: {
    y: "-100px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 150,
      duration: 1,
    },
  },
  exit: {
    y: "-100px",
    opacity: 0,
    transition: {
      stiffness: 150,
      duration: 1,
    },
  },
};

const variantSub = {
  hidden: {
    y: "100px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      stiffness: 150,
      duration: 1,
    },
  },
  exit: {
    y: "100px",
    opacity: 0,
    transition: {
      stiffness: 150,
      duration: 1,
    },
  },
};

const variantButtons = {
  hidden: {
    y: "100px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      stiffness: 150,
      duration: 1,
    },
  },
  exit: {
    y: "100px",
    opacity: 0,
    transition: {
      stiffness: 150,
      duration: 1,
    },
  },
};

const SliderItem = ({ data, currentSlide, index }) => {
  return (
    <div className="w-screen h-dvh relative">
      <img className="w-full h-full" src={data.url} alt={data.title} />
      <div className="flex flex-col justify-center items-center mt-8 gap-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-4 z-50 font-roboto">
        <motion.h2
          variants={variantTitle}
          initial="hidden"
          animate={index === currentSlide.activeSlide2 ? "visible" : "hidden"}
          exit={
            index !== currentSlide.activeSlide && index !== undefined && "exit"
          }
          className=" font-semibold text-[24px] tracking-[4px] py-2 -mb-3  text-white"
        >
          {data.subTitle}
        </motion.h2>
        <motion.h1
          variants={variantSub}
          initial="hidden"
          animate={index === currentSlide.activeSlide2 ? "visible" : "hidden"}
          exit={
            index !== currentSlide.activeSlide && index !== undefined && "exit"
          }
          className="text-[72px] tracking-[1px]  text-white lg:font-light md:font-extralight"
        >
          {data.title}
        </motion.h1>
        <motion.div
          variants={variantButtons}
          initial="hidden"
          animate={index === currentSlide.activeSlide2 ? "visible" : "hidden"}
          exit={
            index !== currentSlide.activeSlide && index !== undefined && "exit"
          }
          className="flex justify-center gap-x-12 w-4/6 "
        >
          <div className="bg-[#0088DCCC] px-7 py-3 flex flex-shrink-0 mt-1 text-[#333333] cursor-pointer  hover:text-white  hover:bg-[#333333] transition duration-500 ">
            <a className="text-[12px]  font-semibold tracking-[1.5px]" href="#">
              {data.btnText1}
            </a>
          </div>
          <div className="bg-[#FFFFFFCC] px-7 py-3 flex flex-shrink-0 mt-1  hover:text-white cursor-pointer   hover:bg-[#333333] transition duration-500">
            <a className="text-[12px] font-semibold tracking-[1.5px]" href="#">
              {data.btnText2}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SliderItem;
