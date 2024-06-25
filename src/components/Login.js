import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidateData from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUp = () => {
    return setIsSignIn(!isSignIn);
  };

  const handleClickHandler = () => {
    //validate the form
    const message = checkValidateData(email.current.value,password.current.value,name.current.value);
    setErrorMessage(message);
  }

  return (
    <div className="">
      <Header />
      <div className="w-screen absolute ">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

      

      <form onSubmit={(e) => e.preventDefault() } className="w-12/12 lg:w-3/12 md:w-6/12 sm:w-8/12 my-48 absolute p-2 bg-black flex flex-col m-auto right-0 left-0 shadow-2xl bg-opacity-90">
        <h1 className="text-3xl text-white font-bold my-3 mx-10">
          {isSignIn ? "Sign Up" : "Sign In"}
        </h1>

      {/* this field is visible in sign in page */}
        {!isSignIn && (
          <input
            className="p-2 my-3 mx-10 border border-white bg-gray-800 text-white rounded-md"
            type="string    "
            placeholder="Full Name"
            name="fullName"
            ref={name}
          />
        )}


        <input
          className="p-2 my-3 mx-10 border border-white bg-gray-800 text-white rounded-md"
          type="email"
          placeholder="Email and Mobile Number"
          ref={email}
        
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-3 mx-10 border border-white bg-gray-800 text-white rounded-md"
          ref={password}
         
        />
        <p className="text-red-800">{errorMessage}</p>

        <button
          type="submit"
          className="p-2 my-4 mx-10 bg-red-800 text-white rounded-md"
          onClick={handleClickHandler}
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
        <div className="text-white flex mx-10 my-4">
          <p className="">{isSignIn ? "New to Netflix?" : "Already a user?"}</p>
          <span
            className="px-2 hover:text-blue-500 cursor-pointer"
            onClick={toggleSignUp}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;

//https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg
