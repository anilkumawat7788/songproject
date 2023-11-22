import React,{useState} from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./login.css";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("+");
  const navigate = useNavigate();
  // console.log("phone is", phoneNumber)
const requestOTP = async (e) => {

}
  const handleKeypress = (e) => {
    if (e.key === "Enter" && phoneNumber?.length > 11) {
      requestOTP(e);
    }
  
  };
 
  const SingInHandle = () => {
    // setShowOTPSection(true)
    localStorage.setItem("phonenumber", phoneNumber)
    navigate('/verify-otp');
  }

 
  return (
    <>
      <div className="container">
        <div className="row login_main_layout">
          <div className="login_sub_layout">
            <h4>Sign In</h4>
            <p>plese enter your mobile number to login.We will send and Otp to verify your number</p>
            <div className="phone_no">
                        <PhoneInput
                           country={"in"}
                          
                           containerClass={`form-contro containerClass_phone_input`}
                           disableDropdown={true}
                           countryCodeEditable={false}
                          //  disabled={firebaseOtpSent ? true : false}
                           inputExtraProps={{
                             name: "tel",
                             required: true,
                             autoFocus: true,
                           }}
                           onKeyDown={handleKeypress}
                           value={phoneNumber}
                           onChange={setPhoneNumber}
                        />

                         <div className="sing_in_button">
                            <button 
                                type="submit"
                                className="loginButton1"
                                disabled={phoneNumber.length < 12 ? true : false}
                                onClick={SingInHandle}
                                  >SingIn</button>
                          </div> 
                        </div>
                       
                         </div>
        </div>
      </div>
    </>
  )
}

export default Login;