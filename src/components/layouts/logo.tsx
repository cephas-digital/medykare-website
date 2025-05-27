"use client";
import { useNavigate } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import mendylogo from "../../assets/images/mendylogo.png";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer flex items-center gap-2 mb-5"
      >
        <img className=" w-60 h-8" src={mendylogo} alt="" />
      </div>
    </div>
  );
};

export const NewLogo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer flex items-center gap-2"
      >
        <img className=" w-60 h-8" src={mendylogo} alt="" />
      </div>
    </div>
  );
};

export const FooterLogo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer flex items-center gap-2"
      >
        <FaHeartbeat className="text-white text-2xl" />
        <span className="text-xl font-bold text-white">MedyKare</span>
      </div>
    </div>
  );
};

export default Logo;

// import React from "react";
// import LogoIcon from "../../assets/images/vlogo.png";
// import LogoIconS from "../../assets/images/footerlogo.png";
// import { useNavigate } from "react-router";

// const Logo = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <img
//         onClick={() => navigate("/")}
//         src={LogoIcon}
//         alt=""
//         className="cursor-pointer h-16 w-20 mb-5"
//       />
//     </div>
//   );
// };

// export const NewLogo = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <img
//         onClick={() => navigate("/")}
//         src={LogoIcon}
//         alt=""
//         className="cursor-pointer w-20 h-16"
//       />
//     </div>
//   );
// };

// export default Logo;
