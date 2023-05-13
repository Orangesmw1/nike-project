import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "../../assist/image/logo.png";

import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callApiUser, userLogin } from "../Redux/userSlice";
import { Alert } from "antd";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.user.listUser);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://637b5d216f4024eac20b7454.mockapi.io/user-nike",
    }).then((response) => {
      if (response) {
        dispatch(callApiUser(response.data));
      }
    });

    if (localStorage.getItem("userLogin")) {
      navigate("/");
    }
  }, []);

  const onSubmit = (data) => {
    console.log("data", data);

    dispatch(userLogin(data));
    const localUserLogin = JSON.parse(localStorage.getItem("userLogin"));

    let index = listUser.findIndex((user) => user.email === data.email);

    if (index !== -1) {
      if (localUserLogin) {
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
        <input
          {...register("email", {
            required: true,
          })}
          placeholder="Email address"
        />
        {errors.email?.type === "required" && (
          <p role="alert">Email address is required</p>
        )}

        <input
          {...register("password", {
            required: true,
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password?.type === "required" && (
          <p role="alert">Password is required</p>
        )}

        <div className="check-box">
          <div className="checkbox-login">
            <input
              type="checkbox"
              {...register("checkbox", {
                required: true,
              })}
            />
            <label>Keep me signed in</label>
          </div>
          <a href="">Forgot your password?</a>
        </div>

        {errors.checkbox?.type === "required" && (
          <p role="alert">Checkbox is required</p>
        )}

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
