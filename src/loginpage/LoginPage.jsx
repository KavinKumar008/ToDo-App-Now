import React, { useState } from "react";
import Style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const data = { uname, pass };
  const handleSubmit = () => {
    setUname(
      uname.match(/[a-zA-Z]/) ? navigate("todopage", { state: uname }) : false
    );
    setPass(pass.match(/[0-9]/) ? navigate("todopage") : false);
    console.log(uname);
  };
  return (
    <div className={Style.mainContainer}>
      <h1 className={Style.heading}>Login</h1>
      <hr style={{ width: "100%" }} />
      <div className={Style.formParent}>
        <form className={Style.formContainer}>
          <div className={Style.innerForm}>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Username"
                className={Style.inputField}
                value={uname}
                onChange={(e) => setUname(e.target.value)}
              />
            </label>
            <label htmlFor="pass">
              <input
                type="password"
                id="pass"
                name="pass"
                placeholder="Password"
                className={Style.inputField}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </label>
          </div>
        </form>
        <p className={Style.forgetPass}>Forget Password?</p>
        <button
          type="submit"
          className={Style.btn}
          onClick={handleSubmit}
          disabled={!uname}
        >
          Login
        </button>
        <p className={Style.footerPara}>
          Not a member? <span>Signup</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
