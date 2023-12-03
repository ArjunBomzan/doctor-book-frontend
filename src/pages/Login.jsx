// src/Components/Login.js
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setReduxUser } from "../redux/Slice/userSlice";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { BiLogoFacebook } from "react-icons/bi";

const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: ""
  })

  const [token, setToken] = useState("")
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setloginDetails((pre) => {

      return { ...pre, [name]: value }
    })



  }
  const handleLogin = async () => {
    await axios.post('http://lwww.localhost:3000/login',
      loginDetails, {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    )
      .then(function (response) {
      
        let token =response.data.token
        let user=response.data.user
        setToken(token)
        localStorage.setItem("token",token)
        dispatch(setReduxUser(user))
        if(user.role=="doctor"){

          navigate("/dashboard")
        }
        else{
          navigate("/")
        }
      
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }

  return (
<>
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to={"/signup"}
          >
            Register
          </Link>
        </div>
     
      </div>
    </section>
    </>
  );
};

export default Login;