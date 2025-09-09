import React, { useState } from "react";
import logo from "../assets/Icon.svg";
import CreateAccount from "./CreateAccount";
import TextInput from "../component/TextInput";
import Button from "../component/Button";
import visibility from "../assets/visibility.svg"
import Icon from "../component/Icon.jsx";
import react from "../assets/react.svg"

const Dashboard = () => {
  const [formdata, Setformdata] = useState({
    email: "",
    password: "",
  });
  const [errors, Seterrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formdata.email) {
      newErrors.email = "Email is  required";
      // console.log(newErrors);
    } else if (!emailRegex.test(formdata.email)) {
      newErrors.email = "Enter a valid Email";
    }
    if (!formdata.password) {
      newErrors.password = "Password is required";
      // console.log(newErrors);
    } else if (!passwordRegex.test(formdata.password)) {
      newErrors.password =
        "Password must include: Number (0-9) ,Capital letter(A-Z),";
    }
    Seterrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", formdata);
      // alert("Form submitted successfully!");
      Setformdata({
        email: "",
        password: "",
      });
    }
  };
  const handlechange = (e) => {
    console.log("karuna");
    const { name, value } = e.target;

    // console.log("key::" + name, "value::" + value);
  
    Setformdata({ ...formdata, [name]: value });
  };

  return (
    <div className="main_div">
      <form action="" className="main_form" onSubmit={handleSubmit}>
        <div>
        <div className="logo_div"><img  className="img"src={logo} alt="logo" /> </div>

          <div className="LoginAdmin_Heading">Sign In</div>
        </div>

        <div className="Email_input_div">
          <label htmlFor="">Email Address</label>
           <TextInput 
           name="email"
          type="text"
          value={formdata.email}
          className="Email_password_input"
          placeholder="Email"
          onChange={handlechange}/>     
          
        </div>
        <div className="Msg_red"> {errors.email}</div>
        <div className="Password_div">
         
          <label htmlFor=""> Password</label>
          <div className="password_icon">
          <TextInput
            className="Email_password_input"
            type="password"
            placeholder="Password"
            name="password"
            value={formdata.password}
            onChange={handlechange}
            icon={visibility}
          />
          <Icon className="Icon-visibility" name="visibility" src={visibility}/>
          </div> 
          


        </div>
        <div className="Msg_red"> {errors.password}</div>
        <div className="remember_div">
          <div className="Remember_div">
            <input type="checkbox" />
            <label className="label_Remember" htmlFor="Remember me">
              {" "}
              Remember Me
            </label>
          </div>
          <a className="forgot_div" href="">
            Forgot Password
          </a>
        </div>
        <div className="Login_button_div">
          {/* <button className="Login_button">Login</button> */}
          <Button  className="Login_button" text="Login" />
          
        </div>
        <CreateAccount />
      </form>
    </div>
  );
};

export default Dashboard;
