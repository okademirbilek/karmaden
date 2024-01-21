import React from "react";
import { Icon } from "react-icons-kit";
import { whatsapp } from "react-icons-kit/fa/whatsapp";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-6 right-5 flex items-center gap-3 justify-center px-5  w-min text-center  shadow-lg shadow-[#00000029] cursor-pointer h-[40px] text-white  bg-[#25d366] rounded-[50px] whitespace-nowrap z-30">
      <Icon icon={whatsapp} size={22} className="bold" />
      <h3 className="font-normal leading-[25px] text-[18px]"> Whatsapp</h3>
    </div>
  );
};

export default Whatsapp;
