import React, { useState } from "react";
import Icon from '../assets/Icon.svg';
import CreateAccount from "./CreateAccount";
const Dashboard = () => {
    const[formdata,Setformdata]=useState({
        email:"",
        password:""
    });
    const[errors,Seterrors]=useState({});
    const handleSubmit=(e)=>{
        e.preventDefault();
        let newErrors={}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(!formdata.email){
        newErrors.email="Email is  required";
    }
        else if(!emailRegex.test(formdata.email)){
          newErrors.email="Enter a valid Email";
        }
        if(!formdata.password){
            newErrors.password="Password is required";
        }
            else if(!passwordRegex.test(formdata.password)){
                newErrors.password="Password must include: Number (0-9) ,Capital letter(A-Z)," 
        }
        Seterrors(newErrors);
 if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", formdata);
      Setformdata({
        email:"",
        password:""
      })
      }
    }
      const handlechange=(e)=>{
        const{name ,value}=e.target;
        // const [emailvalue,passwordvalue]=e.target;
        // Setformdata({...formdata,[email]:emailvalue,[password]:passwordvalue})
        // console.log(emailvalue,passwordvalue);
        console.log('key::'+name,"value::"+value);

        Setformdata({...formdata,[name]:value});
        
        // console.log(result);
        // console.log(formdata);

        
        
      }

  return (
    <div className="main_div">
      <form action="" className="main_form" onSubmit={handleSubmit}>
        <div>
          <div className="LoginAdmin_Heading">Sign In</div>
        </div>
        {/* <div className="logo_div"><img  className="img"src={Icon} alt="logo" /> </div> */}
        
        <div className="Email_input_div">
          <label htmlFor="">Email Address</label>
          <input
            className="Email_password_input"
            type="text"
            placeholder="Email"
            name="email"
            value={formdata.email}
            onChange={handlechange}
          />
        </div>
        <div className="Msg_red">  {errors.email}</div>
        <div className="Password_div">
          <label htmlFor=""> Password</label>
          <input
            className="Email_password_input"
            type="password"
            placeholder="Password"
            name="password"
            value={formdata.password}
            onChange={handlechange}
          />
        </div>
        <div className="Msg_red"> {errors.password}</div>
        <div className="remember_div">
          <div className="Remember_div">
            <input type="checkbox" />
            <label className="label_Remember" htmlFor="Remember me"> Remember Me</label>
          </div>
          <a className="forgot_div" href="">
            Forgot Password
          </a>
        </div>
        <div className="Login_button_div">
          <button className="Login_button">Login</button>
        </div>
        <CreateAccount/>
      </form>
    </div>
  );
};

export default Dashboard;
