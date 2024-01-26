import React from "react";
import Google from "../images/google.svg";
import Iphone from "../images/iphone.svg";
import Mycrosoft from "../images/mycrosoft.svg";

const Signin = () => {
  return (
    <div style={{width:'100%'}}>
      <div className="formblock_inp">
        <span>Email</span>
        <input type="text" placeholder="Email" />
      </div>
      <div className="formblock_inp">
        <span>Password</span>
        <input type="text" placeholder="Enter Password" />
      </div>
      <div className="formblock_btn">
        <button>Next</button>
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
  );
};

export default Signin;
