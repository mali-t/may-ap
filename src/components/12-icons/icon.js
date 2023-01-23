import React from "react";
import { FcHome, FcWikipedia } from "react-icons/fc";
import { FiMic, FiCheck, FiArrowDown, FiStar } from "react-icons/fi";

const Icon = () => {
  return (
    <div>
      <FcHome style={{ fontSize: "3rem", color: "red" }} />
      <FcWikipedia style={{ fontSize: "2.5rem" }} />
      <FiMic style={{ color: "blue", fontSize: "5rem" }} />
      <FiCheck />
      <FiArrowDown />
      <FiStar />
    </div>
  );
};

export default Icon;
