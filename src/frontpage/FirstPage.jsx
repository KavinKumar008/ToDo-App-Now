import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaAmazon } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TiTick } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Blue from "../assets/blue.jpg";
import Blue4 from "../assets/blue4.jpg";
import Blue5 from "../assets/blue5.jpg";

const FirstPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showdata, setShowdata] = useState(false);
  const [onBoardMtd, setOnboardMtd] = useState("signup");
  const [currentImage, setCurrentImage] = useState(null);
  const images = [Blue, Blue4, Blue5];

  const navigate = useNavigate();
  const data = { mail, password };

  const handleSubmit = () => {
    // e.preventDefault();
    // setShowdata(true);
    navigate("/todoPage", { state: data });
  };

  const handleReset = () => {
    setMail("");
    setPassword("");
  };

  const handleSignup = () => {
    setOnboardMtd("signup");
  };

  const handleLogin = () => {
    setOnboardMtd("login");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className={styles.mainContainer}>
      <section
        className={styles.leftContainer}
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <div className={styles.leftTop}>
          <h1 className={styles.leftHeadingPara}>Welcome to TODO-App</h1>
          <p className={styles.leftTitlePara}>
            By using html,css and javascript.
          </p>
        </div>
        <div className={styles.leftBottom}>
          <h1 className={styles.leftHeadingPara}>Save Your Data Here</h1>
          <p className={styles.leftTitleParas}>
            Effortless work together with your
            <span className={styles.smallSpan}> team in real time.</span>
          </p>
        </div>
      </section>
      <section className={styles.rightContainer}>
        <div className={styles.rightInnerContainer}>
          <h1 className={styles.rightHeading}>
            <FaAmazon />
            Login
          </h1>
          {/* <div className={styles.formBtn}>
              <button
                className={
                  onBoardMtd === "signup" ? styles.leftBtns : styles.rightBtns
                }
                onClick={handleSignup}
              >
                Sign Up
              </button>
              <button
                className={
                  onBoardMtd === "login" ? styles.leftBtns : styles.rightBtns
                }
                type="submit"
                onClick={handleLogin}
              >
                Login
              </button>
            </div> */}
          <form className={styles.formContainer}>
            <div className={styles.innerForm}>
              <label htmlFor="mailid">
                <p className={styles.emailId}>
                  {onBoardMtd === "signup" ? `Email Id ` : `Username/Emai Id`}
                </p>
                <input
                  type="email"
                  id="mailid"
                  name="mail"
                  className={styles.inputField}
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </label>
              <label htmlFor="pass">
                <div className={styles.boxPara}>
                  <p className={styles.leftPass}>Password</p>
                  <p className={styles.rightPass}>
                    {onBoardMtd === "signup" ? null : `Forgot Password?`}
                  </p>
                </div>
                <input
                  type="password"
                  id="pass"
                  name="pass"
                  placeholder="Enter Password"
                  className={styles.inputField}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              {/* <div className={styles.passPara}>
                  {onBoardMtd === "signup" ? (
                    <>
                      <p className={styles.paras}>
                        <TiTick /> Password Strength:Weak
                      </p>
                      <p className={styles.paras}>
                        <TiTick /> Cannot contain your name or email address
                      </p>
                      <p className={styles.paras}>
                        <TiTick /> At least 8 character's
                      </p>
                      <p className={styles.paras}>
                        <TiTick /> Contains a number or symbol
                      </p>
                    </>
                  ) : null}
                </div> */}
              <div className={styles.btn}>
                <button
                  type="submit"
                  className={styles.sBtn}
                  onClick={handleSubmit}
                >
                  {onBoardMtd === "signup" ? `Create Account` : `Login`}
                </button>
              </div>
            </div>
          </form>
          {/* <div className={styles.spanHead}>
              <span className={styles.spanOr}>
                {onBoardMtd === "login" ? null : `OR`}
              </span>
            </div> */}
          <div className={styles.footerImg}>
            {onBoardMtd === "login" ? null : (
              <>
                <FcGoogle className={styles.logos} />
                <FaApple className={styles.logos} />
                <FaMicrosoft className={styles.logos} />
              </>
            )}
          </div>
          {/* </form> */}
        </div>
      </section>
      {/* <div className={styles.showingData}>
          {showdata ? (
            <>
              <li>{mail}</li>
              <li>{password}</li>
            </>
          ) : (
            <span>{showdata}</span>
          )}
        </div> */}
    </main>
  );
};

export default FirstPage;
