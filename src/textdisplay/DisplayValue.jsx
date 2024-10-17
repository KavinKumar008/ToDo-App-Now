import React, { useState } from "react";
import Style from "../textdisplay/style.module.css";
import { MdDelete, MdOutlineEditNote } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const DisplayValue = ({ item, deleteData, ind, eData }) => {
  const [editBox, setEditBox] = useState(false);
  const [inputs, setInputs] = useState("");

  function getItem(ind) {
    deleteData(ind);
  }

  function editData() {
    setEditBox(true);
    setInputs(item);
  }

  function setClick(ind, inputs) {
    eData(ind, inputs);
    setEditBox();
  }

  return (
    <main key={ind} className={Style.displayContainer}>
      <div>
        <div type="text" className={Style.inputDisplay}>
          <div className={Style.innerField}>
            <h1 className={Style.displayData}>{item}</h1>
            <div className={Style.btns}>
              <button className={Style.logos}>
                <FaEdit
                  fontSize={22}
                  className={Style.editLogo}
                  onClick={() => editData()}
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
        <div className={Style.editField}>
          {editBox ? (
            <div className={Style.setField}>
              <input
                type="text"
                value={inputs}
                onChange={(e) => setInputs(e.target.value)}
                className={Style.inputField}
              />
              <button
                type="submit"
                onClick={() => setClick(ind, inputs)}
                className={Style.inputBtn}
              >
                Set
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default DisplayValue;
