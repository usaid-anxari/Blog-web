import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../Appwrite/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button, Logo, Input } from "./Index";
import { login as authLogin } from "../store/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {register, handleSubmit} = useForm();
  // Login
  const loginSubmit = async (data) => {
    setError("");
    try {
      const session = await authService.logIn(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.massege);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to={"/signup"}
            className="font-medium text-primary transition-all duration-200 hover:underline">
            Sign Up
          </Link>
        </p>
        {error && (
          <span className="text-red-600 mt-8 text-center">{error}</span>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(loginSubmit)} className="mt-8">
          <div className="space-y-5">
            <Input
              lable="Email :"
              placeholder="Enter Your Email"
              type="email"
              {...register("email", {
                require: true,
                validate: {
                  matchPattren: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email Address must be a valid address",
                },
              })}
            />
            <Input
              lable="Password: "
              placeholder="Enter Password Here"
              type="password"
              {...register("password", { require: true })}
            />
            <Button type={'submit'} className="w-full" > Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
