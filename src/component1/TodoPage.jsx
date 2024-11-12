import React, { useEffect, useState } from "react";
import Style from "../component1/style.module.css";
import { FaRegEdit } from "react-icons/fa";
import DisplayValue from "../textdisplay/DisplayValue";
import WeatherPage from "../weatherpage/WeatherPage";

const TodoPage = () => {
  const [inputValue, setInputValue] = useState("");
  // const [storeData, setStoreData] = useState([]);
  // const [storeTime, setStoreTime] = useState([]);
  const [displayTasks, setDisplayTasks] = useState([]);

  const handleSubmit = () => {
    const currentTime = new Date().toLocaleTimeString();
    // setStoreData((prev) => [...prev, inputValue]);
    // setStoreTime((prevTime) => [...prevTime, currentTime]);
    setDisplayTasks((prev) => [
      ...prev,
      { task: inputValue, time: currentTime },
    ]);
    setInputValue("");
  };

  function eData(eIndex, einput) {
    console.log(eIndex, einput);
    const currentTime = new Date().toLocaleTimeString();
    setDisplayTasks((prevValues) => {
      const updatedStoreData = [...prevValues];
      updatedStoreData[eIndex] = { task: einput, time: currentTime };
      console.log(updatedStoreData);
      return updatedStoreData;
      // updatedStoreData[{ eIndex }] = [{ einput }];
      // return updatedStoreData;
    });
    // setStoreData((prevStoreData) => {
    //   const updatedStoreData = [...prevStoreData];
    //   updatedStoreData[eIndex] = einput;
    //   return updatedStoreData;
    // });
  }
  // console.log(displayTasks);

  function deleteData(index) {
    // setStoreData(storeData.filter((_, ind) => ind !== index));
    setDisplayTasks(displayTasks.filter((_, ind) => ind !== index));
  }

  return (
    <main className={Style.mainContainer}>
      <div className={Style.title}>
        <h1 className={Style.appName}>
          <span>TO-DO </span>
        </h1>
        <WeatherPage />
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
      {displayTasks.map((item, ind) => (
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
