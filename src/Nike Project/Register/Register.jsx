import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email address</label>
        <input
          type="email"
          {...register("emailAddress", {
            required: true,
          })}
        />
        {errors?.emailAddress?.type === "required" && (
          <p>This field is required</p>
        )}

        <label>First name</label>
        <input
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <p>This field is required</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}

        <label>Laste Name</label>
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        {errors?.lastName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}

        <label>Age</label>
        <input {...register("age", { min: 18, max: 99 })} />
        {errors.age && (
          <p>You Must be older then 18 and younger then 99 years old</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
