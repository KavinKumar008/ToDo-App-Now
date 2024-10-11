import React, { useState } from "react";
import Style from "../textdisplay/style.module.css";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const DisplayValue = ({ item, deleteData, ind }) => {
  function getItem(itm) {
    deleteData(itm);
  }

  return (
    <main key={ind} className={Style.displayContainer}>
      <div type="text" className={Style.inputDisplay}>
        <div className={Style.inputChild}>
          <h1 className={Style.displayData}>{item}</h1>
          <div className={Style.btns}>
            <button className={Style.logos}>
              <FaEdit fontSize={22} className={Style.editLogo} />
            </button>
            <button className={Style.logos}>
              <MdDelete
                fontSize={24}
                className={Style.deleteLogo}
                onClick={() => getItem(ind)}
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DisplayValue;
