import React from 'react'

const SigninEmail = () => {

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
    
  )
}

export default SigninEmail;
