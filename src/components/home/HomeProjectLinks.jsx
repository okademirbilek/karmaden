import React, { useState } from "react";
import { motion } from "framer-motion";

const variantBack = {
  initial: {},
  hover: {
    backgroundColor: "#4FB8FF",

    transition: {
      duration: 2,
    },
  },
  exit: {
    transition: {
      duration: 2,
    },
  },
};

const variantFront = {
  initial: {
    color: "#FFFFFF",
  },
  hover: {
    color: "#000000",
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    color: "#FFFFFF",
    transition: {
      duration: 0.5,
    },
  },
};

const HomeProjectLinks = ({ title, current }) => {
  return (
    <motion.li
      variants={variantBack}
      initial="initial"
      whileHover="hover"
      exit="exit"
    >
      <motion.a
        variants={variantFront}
        initial="initial"
        whileHover="hover"
        exit="exit"
        className={`${
          current && "bg-[#4FB8FF] text-[#333]"
        }   px-1.5 py-1 z-10`}
        href="#"
      >
        {title}
      </motion.a>
    </motion.li>
  );
};

export default HomeProjectLinks;
