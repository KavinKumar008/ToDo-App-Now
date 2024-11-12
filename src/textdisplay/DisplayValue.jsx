import React, { useState } from "react";
import styles from "../textdisplay/style.module.css";
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
    setInputs(item.task);
  }

  function setClick(ind, inputs) {
    eData(ind, inputs);
    setEditBox();
  }

  return (
    <main key={ind} className={styles.displayContainer}>
      <div>
        <div type="text" className={styles.inputDisplay}>
          <div className={styles.innerField}>
            <h1 className={styles.displayData}>{item.task}</h1>
            <div className={styles.btns}>
              <button className={styles.logos}>
                <FaEdit
                  fontSize={22}
                  className={styles.editLogo}
                  onClick={() => editData()}
                />
              </button>
              <button className={styles.logos}>
                <MdDelete
                  fontSize={24}
                  className={styles.deleteLogo}
                  onClick={() => getItem(ind)}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.editField}>
          {editBox ? (
            <div className={styles.setField}>
              <input
                type="text"
                value={inputs}
                onChange={(e) => setInputs(e.target.value)}
                className={styles.inputField}
              />
              <button
                type="submit"
                onClick={() => setClick(ind, inputs)}
                className={styles.inputBtn}
              >
                Set
              </button>
            </div>
          ) : null}
        </div>
        <div className={styles.timeParent}>
          <span>Task added at:{item.time}</span>
        </div>
      </div>
    </main>
  );
};

export default DisplayValue;
