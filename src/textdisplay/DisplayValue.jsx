import React from "react";
import Style from "../textdisplay/style.module.css";
import { MdOutlineDelete } from "react-icons/md";

const DisplayValue = () => {
  return (
    <div className={Style.displayContainer}>
      <label className={Style.outerLabel}>
        <input type="text" className={Style.inputDisplay} />
      </label>
      <div className={Style.deleteContainer}>
        <MdOutlineDelete className={Style.deleteLogo} />
      </div>
    </div>
  );
};

export default DisplayValue;
