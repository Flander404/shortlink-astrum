import React, { useState } from "react";
import "../style/signup.css";
import { FaCheck } from "react-icons/fa";
import Logo from "../images/Logo text.svg";
import Google from "../images/google.svg";
import Iphone from "../images/iphone.svg";
import Mycrosoft from "../images/mycrosoft.svg";
import Signin from "./Signin";

const Signup = () => {
  const [isSign, setIsSign] = useState(true);
  const [isValidation, setIsValidation] = useState("");

  const signupbg = () => {
    setIsSign(true);
  };

  const signinbg = () => {
    setIsSign(false);
  };

  const getCheckBtnStyle = () => {
    return isSign
      ? { right: "auto", left: "4px" }
      : { right: "4px", left: "auto" };
  };

  const getCheckBtnUpStyle = () => {
    return isSign ? { color: "#FFF" } : { color: "#9c9aa5" };
  };

  const getCheckBtnInStyle = () => {
    return isSign ? { color: "#9c9aa5" } : { color: "#FFF" };
  };

  const signup = () => {
    let email = document.querySelector("#form_email");
    let password = document.querySelector("#form_pass");
    let strength = 0;
    // Проверка длины пароля
    if (password.value.length < 8) {
      setIsValidation("Password should be at least 8 characters");
      document.querySelector(".validate_title span").style = "display:flex";
      return;
    }
    // Проверка на совпадение с email
    if (email.value === password.value) {
      setIsValidation("Cannot contain your name or email address");
      document.querySelector(".validate_title span").style = "display:flex";
      return;
    } else {
      setIsValidation("");
      document.querySelector(".validate_title span").style = "display:none";
    }

    // Проверка наличия хотя бы одной цифры
    if (/\d/.test(password.value)) {
      strength++;
    }

    // Проверка наличия хотя бы одной заглавной буквы
    if (/[A-Z]/.test(password.value)) {
      strength++;
    }

    // Проверка наличия хотя бы одной строчной буквы
    if (/[a-z]/.test(password.value)) {
      strength++;
    }

    // Проверка наличия хотя бы одного специального символа
    if (/[^A-Za-z0-9]/.test(password.value)) {
      strength++;
    }

    // Оценка сложности пароля
    if (strength === 1) {
      setIsValidation("Password Strength: Weak");
      document.querySelector(".validate_title span").style = "display:flex";
    } else if (strength === 2) {
      setIsValidation("Password Strength: Moderate");
      document.querySelector(".validate_title span").style = "display:flex";
    } else if (strength >= 3) {
      setIsValidation("Password Strength: Strong");
      document.querySelector(".validate_title span").style = "display:flex";
    }
  };

  return (
    <div className="singup">
      <div className="helloblock">
        <h1 className="helloblock_h1">
          Wellcome to GetTheShort. Your Shortcut to Simplicity!
        </h1>
        <h2 className="helloblock_h2">
          Are you tired of sharing long and cumbersome URLs? Look no further!
          GetTheShort is here to revolutionize the way you share links.
        </h2>
        <h2 className="helloblock_h_2">
          Ready to simplify your link-sharing experience? Sign up now and start
          creating short links effortlessly!
        </h2>
      </div>
      <div className="formblock">
        <img src={Logo} alt="" />
        <div className="formblock_checkbtn">
          <div onClick={signupbg} className="checkbtn_up">
            <p style={getCheckBtnUpStyle()}>Sign Up</p>
          </div>
          <div onClick={signinbg} className="checkbtn_in">
            <p style={getCheckBtnInStyle()}>Sign In</p>
          </div>
          <div className="checkbtn" style={getCheckBtnStyle()}></div>
        </div>
        {isSign ? (
          <div style={{width:'100%'}}>
            <div className="formblock_inp">
              <span>Email</span>
              <input id="form_email" type="text" placeholder="Email" />
            </div>
            <div className="formblock_inp">
              <span>Password</span>
              <input id="form_pass" type="text" placeholder="Enter Password" />
            </div>
            <div className="formblock_validate">
              <div className="validate_title">
                <span style={{ display: "none" }}>
                  <FaCheck />
                </span>
                {isValidation}
              </div>
            </div>
            <div className="formblock_inp">
              <span>Password</span>
              <input type="text" placeholder="Confirm Password" />
            </div>
            <div className="formblock_btn">
              <button onClick={signup}>Create Account</button>
            </div>
            <div className="formblock_orr">
              <div className="formblock_orr_line"></div>
              <div className="formblock_orr_text">
                <p>OR</p>
              </div>
              <div className="formblock_orr_line"></div>
            </div>
            <div className="formblock_acc">
              <div className="formblock_acc_card">
                <img src={Google} alt="" />
              </div>
              <div className="formblock_acc_card">
                <img src={Iphone} alt="" />
              </div>
              <div className="formblock_acc_card">
                <img src={Mycrosoft} alt="" />
              </div>
            </div>
          </div>
        ) : (
          <Signin />
        )}
      </div>
    </div>
  );
};

export default Signup;
