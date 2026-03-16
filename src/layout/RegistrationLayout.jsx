import React from "react";
import { Outlet } from "react-router-dom";
import foodster2 from "/foodster2.png";

const RegistrationLayout = () => {
  return (
    <div>
      <div className="w-screen h-screen overflow-hidden relative">
        <img src={foodster2} alt="Foodster" className="w-full h-full object-cover object-top"/>
        <div className="bg-black/50 absolute top-0 w-full h-full "></div>
        
      </div>
      <div className="absolute top-4 left-14 w-180 h-[calc(100%-2rem)] bg-white/50 backdrop-blur-xs rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default RegistrationLayout;
