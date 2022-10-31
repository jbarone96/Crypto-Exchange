import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbMail } from "react-icons/tb";
import { BiLock } from "react-icons/bi";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await user email and password
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
  };

  return (
    <>
      <div className="max-w-[350px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="flex text-color font-semibold text-3xl justify-center">
          Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="text-color text-xl" htmlFor="email">
              Email
            </label>
            <div className="my-2 w-full relative rounded-lg shadow-xl">
              <input
                onChange={handleEmail}
                className="w-full p-2 border rounded-lg"
                required
                type="email"
                id="email"
                placeholder="Enter Email Address"
              />
              <TbMail className="absolute right-4 top-3 text-gray-600 text-lg" />
            </div>
          </div>
          <div className="my-5">
            <label className="text-color text-xl" htmlFor="password">
              Password
            </label>
            <div className="my-2 w-full relative rounded-lg shadow-xl">
              <input
                onChange={handlePassword}
                className="w-full p-2 border rounded-lg"
                id="password"
                type="password"
                placeholder="Enter Password"
              />
              <BiLock className="absolute right-4 top-3 text-gray-600 text-lg" />
            </div>
          </div>
          <button className="sign-btn" type="submit">
            Sign In
          </button>
        </form>
        <p>
          Need an account?
          <br />
          <Link
            className="text-slate-800 font-semibold dark:text-blue-500"
            to="/register"
          >
            Register Here
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignInPage;
