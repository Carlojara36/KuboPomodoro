import React from "react";
import { useNavigate } from "react-router-dom";
import {render} from 'react-dom';
import Login from "./Login";
import ChangePassword from "./ChangePassword.js";


 

  
  function Signup(){
    
    const handleCancel = () => {
     render(<Login />, document.getElementById('root'));
    }

    const handleSignup = () => {
      render(<ChangePassword/>, document.getElementById('root'));
    }
  
    return(
      <div className="flex h-full flex-row justify-center mt-24">
        <div className="flex flex-row -space-x-1">
        
          <div className=" rounded-l-3xl px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full h-full bg-[#EB3C27]"> 
            <img className="object-contain h-96 w-96" src={require("../images/logo-dark.png" )}></img>
          </div>

          <div className=" flex flex-col m-auto rounded-r-3xl  lg:px-16 py-16 lg:max-w-xl sm:max-w-md w-full h-full bg-gray-300 " >
            <h1 className=" justify-center text-center text-5xl leading-10 font-bold text-black">
              SIGNUP
            </h1>
            <form className='mt-12 -space-y'>
                  <div className="rounded-md shadow-sm -space-y-px ">
                      <div>
                        <label for="email" class="sr-only ">Email</label>
                        <input type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Email Address"
                        className=" w-full appearance-none rounded-none relative block  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm mb-2" 
                        required></input>
                      </div>
      
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
                        <label for="password" className="sr-only">Password</label>
                        <input type="password" 
                        name="password" 
                        id="confirm-password-signup" 
                        placeholder="Confirm Password"
                        className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm my-2"
                        required></input>
                      </div>
      
                      <div>
                        <button type="button" className="w-full justify-center my-2 text-white bg-[#087830] hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2" onClick={handleSignup}>
                            Signup
                        </button>
                        <button type="button" className="w-full justify-center my-2 text-white bg-[#EB3C27] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={handleCancel}>
                            Cancel
                        </button>
                      </div>
                  </div>
            </form>
          </div>
        
        </div>

    </div>
        
      );
  
  }

  export default Signup;