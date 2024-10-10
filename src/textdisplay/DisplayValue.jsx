import React from "react";
import Style from "../textdisplay/style.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const DisplayValue = ({ inputValue }) => {
  return (
    <main className={Style.displayContainer}>
      <div type="text" className={Style.inputDisplay}>
        <div className={Style.inputChild}>
          <h1 className={Style.displayData}>{inputValue}</h1>
          <div className={Style.btns}>
            <button className={Style.logos}>
              <FaEdit fontSize={22} className={Style.editLogo} />
            </button>
            <button className={Style.logos}>
              <MdDelete fontSize={24} className={Style.deleteLogo} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DisplayValue;
