import React, { useEffect, useState } from "react";
import Style from "../component1/style.module.css";
import { FaRegEdit } from "react-icons/fa";
import DisplayValue from "../textdisplay/DisplayValue";

const TodoPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [storeData, setStoreData] = useState([]);

  const handleSubmit = () => {
    setStoreData((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  function eData(eIndex, einput) {
    setStoreData((prevStoreData) => {
      const updatedStoreData = [...prevStoreData];
      updatedStoreData[eIndex] = einput;
      return updatedStoreData;
    });
    console.log(eIndex, einput);
  }

  function deleteData(index) {
    setStoreData(storeData.filter((_, ind) => ind !== index));
  }
  console.log(storeData);

  return (
    <main className={Style.mainContainer}>
      <div className={Style.title}>
        <h1 className={Style.appName}>
          <span>TO-DO NOW</span>
        </h1>
        <div className={Style.logoContainer}>
          <span>
            <FaRegEdit className={Style.logo} />
          </span>
        </div>
      </div>
      <div className={Style.formMainOuter}>
        <label className={Style.formInner}>
          <input
            type="text"
            className={Style.inputBox}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <div className={Style.btns}>
            <button
              disabled={!inputValue}
              className={Style.btn}
              onClick={handleSubmit}
            >
              Add task
            </button>
          </div>
        </label>
      </div>
      {storeData.map((item, ind) => (
        <div key={ind}>
          <DisplayValue
            item={item}
            ind={ind}
            deleteData={deleteData}
            eData={eData}
          />
        </div>
      ))}
    </main>
  );
};

export default TodoPage;
