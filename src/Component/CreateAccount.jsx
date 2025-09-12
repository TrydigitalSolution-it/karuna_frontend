import React from "react";
import Google from "../assets/Google.svg";
import Apple from '../assets/Apple.svg';
const CreateAccount = () => {
  return (
    <div className="createAccount_mainDiv">
      <div className="create-account__text">
        Don't have an Account? <span>Create Account</span>{" "}
      </div>
      {/* <div className="create-account__separator"> or</div> */}
      {/* <div className="create-account__socials">
       
        <div className="socials_google"><img src={Google} alt="" /></div>
        <div className="socials_Apple"><img src={Apple} alt="" /></div>
      </div> */}
    </div>
  );
};

export default CreateAccount;
