import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "../../assist/image/logo.png";

import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/userSlice";
import { Alert } from "antd";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const listUser = useSelector((state) => state.user.listUser);

  const navigate = useNavigate();
  const distpatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("userLogin")) {
      navigate("/");
    }
  }, []);

  const onSubmit = (data) => {
    listUser?.forEach((dataUserRegister) => {
      if (dataUserRegister.email === data.email) {
        if (dataUserRegister.password === data.password) {
          distpatch(userLogin(dataUserRegister));

          localStorage.setItem("userLogin", JSON.stringify(dataUserRegister));
        }
      }
    });

    if (localStorage.getItem("userLogin")) {
      const id = toast.loading("Please wait...");

      setTimeout(() => {
        toast.update(id, {
          render: "Logged in successfully",
          type: "success",
          isLoading: false,
          position: "top-right",
        });

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }, 2000);
    }
  };

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
          <a href="">Forgot your password?</a>
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
      <ToastContainer />
    </div>
  );
};

export default Login;
