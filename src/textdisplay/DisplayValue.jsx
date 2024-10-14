import React, { useState } from "react";
import Style from "../textdisplay/style.module.css";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const DisplayValue = ({ item, deleteData, ind }) => {
  const [editBox, setEditBox] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [store, setStore] = useState([]);
  function getItem(itm) {
    deleteData(itm);
  }

  function editData() {
    setEditBox(true);
    setInputs(item);
  }

  const setClick = () => {
    setStore([inputs]);
    setInputs("");
  };

  return (
    <main key={ind} className={Style.displayContainer}>
      <div type="text" className={Style.inputDisplay}>
        <div className={Style.inputChild}>
          <h1 className={Style.displayData}>
            {editBox ? null : item}
            {/* {store} */}
          </h1>
          <div className={Style.btns}>
            <button className={Style.logos}>
              <FaEdit
                fontSize={22}
                className={Style.editLogo}
                onClick={() => editData(ind)}
              />
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
      {editBox ? (
        <div>
          <input
            type="text"
            value={inputs}
            onChange={(e) => setInputs(e.target.value)}
          />
          <button type="submit" onClick={setClick}>
            Set
          </button>
        </div>
      ) : null}
    </main>
  );
};

export default DisplayValue;
