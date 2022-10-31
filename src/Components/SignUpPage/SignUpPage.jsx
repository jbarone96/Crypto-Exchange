import React, { useState } from "react";
import { TbMail } from "react-icons/tb";
import { BiLock } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await signup
      navigate("/account");
    } catch (err) {
      // Create toast
      console.log(err);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <div className="max-w-[350px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="flex text-color font-semibold text-3xl justify-center">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="text-color text-xl" htmlFor="firstName">
              First Name
            </label>
            <div className="my-2 w-full relative rounded-lg shadow-xl">
              <input
                // onchange={handleEmail}
                className="w-full p-2 border rounded-lg"
                required
                id="firstName"
                type="firstName"
                placeholder="Enter Your First Name"
              />
              <AiOutlineUser className="absolute right-4 top-3 text-gray-600" />
            </div>
          </div>
          <div className="my-5">
            <label className="text-color text-xl" htmlFor="lastName">
              Last Name
            </label>
            <div className="my-2 w-full relative rounded-lg shadow-xl">
              <input
                // onchange={handleEmail}
                className="w-full p-2 border rounded-lg"
                required
                id="lastName"
                type="lastName"
                placeholder="Enter Your Last Name"
              />
              <AiOutlineUser className="absolute right-4 top-3 text-gray-600" />
            </div>
          </div>
          <div className="my-5">
            <label className="text-color text-xl" htmlFor="email">
              Email
            </label>
            <div className="my-2 w-full relative rounded-lg shadow-xl">
              <input
                onchange={handleEmail}
                className="w-full p-2 border rounded-lg"
                required
                id="email"
                type="email"
                placeholder="Enter Email Address"
              />
              <TbMail className="absolute right-4 top-3 text-gray-600" />
            </div>
          </div>
          <div className="my-5">
            <label className="text-color text-xl" htmlFor="password">
              Password
            </label>
            <div className="my-2 w-full relative rounded-lg shadow-xl">
              <input
                onchange={handlePassword}
                className="w-full p-2 border rounded-lg"
                required
                id="password"
                type="password"
                placeholder="Enter Password"
              />
              <BiLock className="absolute right-4 top-3 text-gray-600" />
            </div>
          </div>
          <div className="my-5">
            <label className="text-color text-xl" htmlFor="confirm-password">
              Confirm Password
            </label>
            <div className="my-2 w-full relative rounded-lg shadow-xl">
              <input
                onchange={handlePassword}
                className="w-full p-2 border rounded-lg"
                required
                id="confirm-password"
                type="confirm-password"
                placeholder="Confirm Password"
              />
              <BiLock className="absolute right-4 top-3 text-gray-600" />
            </div>
          </div>
          {/* Conditionally render the color so that if forms are filled, render green, otherwise = disabled */}
          <button
            className="sign-btn bg-green-500 p-2 rounded-md"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="my-3 text-gray-500 dark:text-gray-400 text-sm">
          Already have an account? <br />
          <Link
            className="text-slate-800 font-semibold dark:text-blue-500"
            to="/signin"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUpPage;
