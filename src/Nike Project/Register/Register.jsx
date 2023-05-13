import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import logo from "../../assist/image/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../Redux/userSlice";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listUser = useSelector((state) => state.user.listUser);

  const onSubmit = (data) => {
    dispatch(userRegister(data));
    let index = listUser.findIndex((user) => user.email === data.emailAddress);

    if (index === -1) {
      const id = toast.loading("Please wait...");

      setTimeout(() => {
        toast.update(id, {
          render: "Sign Up Success",
          type: "success",
          isLoading: false,
          position: "top-right",
        });

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }, 2000);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="header-register">
          <img src={logo} alt="" />
          <h2>BECOME A NIKE MEMBER</h2>
          <h6>
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </h6>
        </div>
        <input
          placeholder="Email address"
          type="email"
          {...register("emailAddress", {
            required: true,
          })}
        />
        {errors.emailAddress?.type === "required" && (
          <p role="alert">Email address is required</p>
        )}

        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: true,
          })}
        />
        {errors.password?.type === "required" && (
          <p role="alert">Password is required</p>
        )}

        <input
          placeholder="First name"
          {...register("firstName", {
            required: true,
            maxLength: 20,
          })}
        />
        {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )}
        {errors.firstName?.type === "maxLength" && (
          <p role="alert">Up to 20 characters</p>
        )}

        <input
          placeholder="Last name"
          {...register("lastName", {
            required: true,
            maxLength: 20,
          })}
        />
        {errors.lastName?.type === "required" && (
          <p role="alert">Last name is required</p>
        )}
        {errors.lastName?.type === "maxLength" && (
          <p role="alert">Up to 20 characters</p>
        )}

        <input
          {...register("dateBirth", {
            required: true,
          })}
          placeholder="Date of Birth"
          type="date"
        />
        {errors.dateBirth?.type === "required" && (
          <p role="alert">Date of Birth is required</p>
        )}

        <h6 className="get-a-member">
          Get a Nike Member Reward every year on your Birthday.
        </h6>

        <select
          {...register("country", {
            required: true,
          })}
        >
          <optgroup label="Country/Region">
            <option value="hanoi">Ha Noi</option>
            <option value="hcm">Ho Chi Minh</option>
            <option value="danang">Da Nang</option>
          </optgroup>
        </select>
        {errors.country?.type === "required" && (
          <p role="alert">Country is required</p>
        )}

        <div className="gender" {...register("gender")}>
          <input type="button" value="Male" id="input-male" />

          <input type="button" value="Female" id="input-femate" />
        </div>

        <div className="check-box">
          <input
            type="checkbox"
            {...register("checkbox", {
              required: true,
            })}
          />
          <label>
            Sign up for emails to get updates from Nike on products, offers and
            your Member benefits
          </label>
        </div>
        {errors.checkbox?.type === "required" && (
          <p role="alert">Checkbox is required</p>
        )}

        <div className="termp">
          By creating an account, you agree to Nike's
          <a href="">Privacy Policy</a>
          <br />
          and
          <a href="">Terms of Use</a>.
        </div>

        <input type="submit" value="join us" />
      </form>

      <div className="sign-in">
        Already a Member?
        <h6>
          <NavLink to="/login">Sign In</NavLink>
        </h6>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
