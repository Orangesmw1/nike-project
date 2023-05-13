import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import logo from "../../assist/image/logo.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios({
      method: "post",
      url: "https://637b5d216f4024eac20b7454.mockapi.io/user-nike",
      data: {
        email: data.emailAddress,
        password: data.password,
        fistname: data.fistname,
        lastName: data.lastName,
        birth: data.dateBirth,
        country: data.country,
        gender: data.gender,
        checkbox: data.checkbox,
      },
    });
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

        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: true,
          })}
        />

        <input
          placeholder="First name"
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />

        <input
          placeholder="Last name"
          {...register("lastName", {
            pattern: /^[A-Za-z]+$/i,
            required: true,
          })}
        />

        <input
          {...register("dateBirth", {
            required: true,
          })}
          placeholder="Date of Birth"
          type="date"
        />

        <h6 className="get-a-member">
          Get a Nike Member Reward every year on your Birthday.
        </h6>

        <select {...register("country")}>
          <optgroup label="Country/Region">
            <option value="hanoi">Ha Noi</option>
            <option value="hcm">Ho Chi Minh</option>
            <option value="danang">Da Nang</option>
          </optgroup>
        </select>

        <div className="gender" {...register("gender")}>
          <input type="button" value="Male" id="input-male" />

          <input type="button" value="Female" id="input-femate" />
        </div>

        <div className="check-box">
          <input type="checkbox" {...register("checkbox")} />
          <label>
            Sign up for emails to get updates from Nike on products, offers and
            your Member benefits
          </label>
        </div>

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
    </div>
  );
};

export default Register;
