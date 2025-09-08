import React, { useState } from "react";
import CreateAccount from "../component/CreateAccount";
import TextInput from "../component/TextInput";
import Button from "../component/Button"
import visibility from "../assets/Icon.svg"
const SignIn = () => {
  const [emaildata, SetEmaildata] = useState({
    email: "",
  });
  const [error, Seterror] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    SetEmaildata({ ...emaildata, [name]: value });
    console.log(emaildata);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emaildata.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(emaildata.email)) {
      errors.email = "Enter Email here  ";
    }
    Seterror(errors);
    if (Object.keys(errors).length == 0) {
      console.log("submit");
      alert("form submitted");
      SetEmaildata({
        email: "",
      });
    }
  };

  return (
    <>
      <div className="main_div">
        <form action="" className="main_form" onSubmit={handleSubmit}>
          <div>
            <div className="LoginAdmin_Heading">Sign In</div>
          </div>
          <div className="Email_input_div">
            <label htmlFor="">Email Address</label>
            <TextInput className="Email_password_input" type="text" placeholder="Email" name="email" value={emaildata.email}
              onChange={handlechange}/>
                        <Icon className="Icon-visibility" name="visibility" src={visibility}/>

            {/* <input
              className="Email_password_input"
              type="text"
              placeholder="Email"
              name="email"
              value={emaildata.email}
              onChange={handlechange}
            /> */}
          </div>
          <div className="Msg_red"> {error.email} </div>
          <div className="Login_button_div">
            {/* <button className="Login_button">Continue</button> */}
            <Button className="Login_button"  text="Continue"/>
          </div>
          <CreateAccount/>
        </form>
      </div>
    </>
  );
};

export default SignIn;
