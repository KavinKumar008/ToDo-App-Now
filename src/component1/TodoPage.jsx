import React, { useState } from "react";
import Style from "../component1/style.module.css";
import { FaRegEdit } from "react-icons/fa";
import DisplayValue from "../textdisplay/DisplayValue";

const TodoPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayData, setDisplayData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayData(true);
  };

  return (
    <main className={Style.mainContainer}>
      <div className={Style.title}>
        <h1 className={Style.appName}>
          <span style={{ fontSize: "2.5rem" }}>TO-DO NOW</span>
        </h1>
        <div className={Style.logoContainer}>
          <span>
            <FaRegEdit className={Style.logo} />
          </span>
        </div>
      </div>
      <label className={Style.formInner}>
        <input
          type="text"
          className={Style.inputBox}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={Style.btn} onClick={handleSubmit}>
          Add Task
        </button>
      </label>

      <hr />

      {displayData ? <DisplayValue inputValue={inputValue} /> : null}
    </main>
  );
};

export default TodoPage;
