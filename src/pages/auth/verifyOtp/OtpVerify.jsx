import React, { useState, useRef } from "react";
import "./otp.css";
import { useNavigate } from 'react-router-dom';
const OtpVerify = () => {
    const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "",]);
  const otpInputs = useRef([]);
  const phoneNumber = localStorage.getItem("phonenumber");
  
const StaticOTP = "5678"
console.log("otp is", otp)
var otpnewvalue = otp.join('');
  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").slice(0, 4);
    const newOtp = [...otp];

    for (let i = 0; i < pasteData.length; i++) {
      if (i < otp.length) {
        newOtp[i] = pasteData[i];
      }
    }

    setOtp(newOtp);
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index]) {
      const newOtp = [...otp];
      newOtp[index] = "";

      setOtp(newOtp);

      if (index > 0) {
        otpInputs.current[index - 1].focus();
      }
    }
  };

  const otpVerifyHandle = () => {
    var otpnewvalue = otp.join('');
    if(StaticOTP === otpnewvalue){
        // alert("otp submitted")
        // localStorage.setItem("user", true)
        localStorage.setItem('apiToken', 'some_item_here');
        navigate("/")

    }else{
        alert("Wrong OTP") 
    }
  };
  return (
    <>
      <div className="container">
        <div className="row login_main_layout">
          <div className="login_sub_layout">
            <div className="login_heading">
              <h4>OTP Verification</h4>
              <p>
                we have sent OTP to +{phoneNumber}. Please enter the code
                received to verify.{" "}
              </p>
            </div>
            <div className="mb-3">
              <div
                className={`otp_boxes d-flex flex-row justify-content-start align-items-start`}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(ref) => (otpInputs.current[index] = ref)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    className="otp_box"
                  />
                ))}
              </div>
              <div className="sing_in_button">
                <button
                  type="submit"
                  className="loginButton1"
                //   disabled={otp === otpnewvalue ? true : false}
                  onClick={otpVerifyHandle}
                >
                  Verify OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerify;
