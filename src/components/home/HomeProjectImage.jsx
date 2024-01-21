import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variantDiv = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    backgroundColor: "#0099FF",
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const variantTitle = {
  hidden: {
    y: "-60px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: "-60px",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const variantTitle2 = {
  hidden: {
    y: "90px",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: "90px",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const HomeProjectImage = ({ url, title, subTitle }) => {
  const [isShown, setIsShown] = useState(false);

  function leaveAnimation() {
    setIsShown(false);
  }

  function enterAnimation() {
    setIsShown(true);
  }
  return (
    <div
      key="modal"
      onMouseEnter={() => enterAnimation()}
      className="cursor-pointer home-project-img  relative"
    >
      <img className=" w-full h-full" src={url} alt="" />
      <AnimatePresence>
        {isShown ? (
          <motion.div
            key={title}
            variants={variantDiv}
            initial="hidden"
            animate={"visible"}
            exit="exit"
            onHoverEnd={() => leaveAnimation()}
            className="flex flex-col gap-3 items-center justify-center z-10 w-full h-full absolute top-0 left-0 "
          >
            <motion.h2
              variants={variantTitle}
              initial="hidden"
              animate={"visible"}
              exit={"exit"}
              className="text-[#333] font-medium text-[18px] leading-[1.2] tracking-[2px]"
            >
              {title}
            </motion.h2>
            <motion.h3
              variants={variantTitle2}
              initial="hidden"
              animate={"visible"}
              exit={"exit"}
              className="text-[#555] font-medium text-[15px] leading-[18px]"
            >
              {subTitle}
            </motion.h3>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default HomeProjectImage;
