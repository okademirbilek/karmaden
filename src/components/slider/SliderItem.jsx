import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const SliderItem = ({ data }) => {
  return (
    <div className="w-screen h-dvh relative">
      <img className="w-full h-full" src={data.url} alt="" />
    </div>
  );
};

export default SliderItem;
