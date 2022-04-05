import React from "react";
import { useNavigate } from "react-router-dom";
import {render} from 'react-dom';
import Signup from './Signup.js';
import ForgotPassword from "./ForgotPassword.js";
import VerifyCode from "./VerifyCode.js";



function Login(){

    const handleSignup = () => {
      render(<Signup />, document.getElementById('root'));
    }

    const handleForgotPassword = () => {
      render(<ForgotPassword />, document.getElementById('root'));
    }

    const login = () => {
      render(<VerifyCode />, document.getElementById('root'));
    }
    
    return (
      <div className="flex h-full flex-row justify-center mt-24">
        <div className="flex flex-row -space-x-1">
          
          <div className=" rounded-l-3xl px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full h-full bg-[#EB3C27]"> 
            <img className="object-contain h-96 w-96" src={require("../images/logo-dark.png" )}></img>
          </div>

          <div className=" flex flex-col m-auto rounded-r-3xl  lg:px-16 py-16 lg:max-w-xl sm:max-w-md w-full h-full bg-gray-300 " >
            <h1 className=" justify-center text-center text-5xl leading-10 font-bold text-black">
              LOGIN 
            </h1>
          <form className='mt-12 -space-y'>
            <div className="rounded-md shadow-sm -space-y-px mr-6 ml-6">
                <div>
                  <label for="username" class="sr-only ">Username</label>
                  <input type="username" 
                  name="username" 
                  id="username" 
                  placeholder="Username"
                  className=" w-full appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm" 
                  required></input>
                </div>
                <div>
                  <label for="password" className="sr-only">Password</label>
                  <input type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Password"
                  className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm my-2"
                  required></input>
                </div>
                <div>
                  <button type="button" className="w-full justify-center my-2 text-white bg-[#087830] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2" onClick={login}>
                      Login
                  </button>
                  <button type="button" className="w-full justify-center my-2 text-white bg-[#EB3C27] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                      <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                      Sign in with Google
                  </button>
                </div>
  
                <div className="text-md text-center">
                  < button className="font-medium text-black hover:underline "  onClick={handleForgotPassword}>
                    Forgot Password?
                  </button >
                </div>
  
                <div>
                  <h3 className='mt-12 text-md text-center text-black'>Don't have an Account?</h3>
                  <button type="button" id="signup-button" className="w-full justify-center my-2 text-white bg-[#087830] hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2" onClick={handleSignup}>
                      Sign Up
                  </button>
                </div>
  
            </div>
          </form>
        </div>
        </div>

    </div>
      
    );

    
  }
  
 
  export default Login;