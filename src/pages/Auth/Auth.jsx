import React from 'react'
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="AppName">
          <h1>Reedz media connect</h1>
          <h6>Meet and Connect with people close to you</h6>
        </div>
      </div>
      <div className="form">
          {/* <SignUp /> */}
          <Login />
        </div>
    </div>
  )
}

function SignUp () {
  return (
    <div className="a-right">
      <form className="infoForm authForm">

        <h3>Sign Up</h3>

        <div className="login">
        <input type="text" placeholder="First Name" className="infoInput" name="firstname"/>
        <input type="text" placeholder="Last Name" className="infoInput" name="lastname"/>
        </div>

        <div>
        <input type="text" placeholder="Username" className="infoInput" name="username"/>
        </div>

        <div>
        <input type="text" placeholder="Password" className="infoInput" name="password"/>
        <input type="text" placeholder="Confirm Password" className="infoInput" name="confirmpassword"/>
        </div>
        
        <div>
          <span style={{fontSize: "12px", textTransform: "capitalize"}}>Already have an account. Login</span>
          <button className="btn infoBtn" type="submit">Sign up</button>
        </div>
        {/* <button className="btn infoBtn" type="submit">Sign up</button> */}
      </form>
    </div>
  )
}

function Login () {
  return (
    <div className="a-left">
      <form action="" className="infoForm authForm">
        <h3>Login</h3>
        <div>
        <input type="text" placeholder="Username" className="infoInput" name="username"/>
        </div>

        <div>
        <input type="text" placeholder="Password" className="infoInput" name="password"/>
        </div>

        <div>
          <span style={{ fontSize: "12px", textTransform: "capitalize"}}>Dont have an account SignUp</span>
          <button className="btn infoBtn">Login </button>
        </div>
        

      </form>
    </div>
  )
}
export default Auth