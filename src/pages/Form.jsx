import React, { useState } from 'react'


const Form = () => {
  
  
    const [formdata, Setformdata] = useState({
      name:"",
    email: "",
    password: "",
  });
  const [errors, Seterrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    const nameRegex=/^[A-Za-z\s]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
       if (!formdata.name) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formdata.name)) {
      newErrors.name = "Enter a valid name ";
    }
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
    const { name, value } = e.target;

    console.log("key::" + name, "value::" + value);

    Setformdata({ ...formdata, [name]: value });
  };

  return (
    <div className="main_div">
      <form action="" className="main_form" onSubmit={handleSubmit}>
        <div>
          <div className="LoginAdmin_Heading">Sign In</div>
        </div>
        {/* <div className="logo_div"><img  className="img"src={Icon} alt="logo" /> </div> */}
 <div className="Email_input_div">
          <label htmlFor="">Name</label>
          <input
            className="Email_password_input"
            type="text"
            placeholder="name"
            name="name"
            value={formdata.name}
            onChange={handlechange}
          />
        </div>
        <div className="Msg_red"> {errors.name}</div>
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
        <div className="Msg_red"> {errors.email}</div>
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
        
        <div className="Login_button_div">
          <button className="Login_button">Save</button>
        </div>
        
      </form>
    </div>
  );
}

export default Form
