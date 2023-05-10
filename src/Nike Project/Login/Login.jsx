import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../assist/image/logo.png";

import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="login">
      <div className="header-login">
        <img src={logo} alt="" />
        <h2>
          YOUR ACCOUNT FOR <br /> EVERYTHING NIKE
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="Email address" />
        <input {...register("password")} placeholder="Password" />

        <div className="check-box">
          <div className="checkbox-login">
            <input type="checkbox" />
            <label>Keep me signed in</label>
          </div>
          <a href="">Forgotten your password?</a>
        </div>

        <div className="termp">
          By logging in, you agree to Nike's
          <a href="">Privacy Policy</a>
          <br />
          and
          <a href="">Terms of Use</a>.
        </div>

        <input type="submit" value="Sign in" />

        <div className="join-us">
          Not a Member?
          <h6>
            <NavLink to="/register">Join Us</NavLink>
          </h6>
        </div>
      </form>
    </div>
  );
};

export default Login;
