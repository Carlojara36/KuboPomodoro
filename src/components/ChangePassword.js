import React from "react";
import { render } from "react-dom";
import Login from "./Login";
import Signup from "./Signup";

function ChangePassword(){
  const handleChangePassword = () => {
    render(<Login />, document.getElementById('root'));
  }

  const handleCancel = () => {
    render(<Signup />, document.getElementById('root'));
  }
    return (
      <div className="flex h-full flex-row justify-center mt-24">
          <div className="flex flex-row -space-x-1">
      
              <div className=" rounded-l-3xl px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full h-full bg-[#EB3C27]"> 
                  <img className="object-contain h-96 w-96" src={require("../images/logo-dark.png" )}></img>
              </div>

              <div className=" flex flex-col m-auto rounded-r-3xl  lg:px-16 py-16 lg:max-w-xl sm:max-w-md w-full h-full bg-gray-300 " >
                  <h1 className=" justify-center text-center text-5xl leading-10 font-bold text-black">
                  CHANGE PASSWORD
                  </h1>
                  <form className='mt-12 justify-center -space-y'>
                    <div className="rounded-md shadow-sm -space-y-px mr-6 ml-6">
                        <div>
                            <label for="email" class="sr-only">Code</label>
                            <input type="text" 
                            name="code" 
                            id="password" 
                            placeholder="New Password"
                            className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm" 
                            required></input>
                        </div>

                        <div>
                            <label for="email" class="sr-only">Code</label>
                            <input type="text" 
                            name="code" 
                            id="password" 
                            placeholder="Confirm New Password"
                            className="w-full appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm mt-6" 
                            required></input>
                        </div>
                        
                        <div>
                            <button type="button" id="verify-login" className="w-full justify-center my-2 text-white bg-[#087830] hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mt-6 mb-2" onClick={handleChangePassword}>
                                Change Password
                            </button>
                            <button type="button" id="cancel-login" className="w-full justify-center my-2 text-white bg-[#EB3C27] border-white hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2" onClick={handleCancel}>
                                Cancel
                            </button>
                            
                        </div>
        
        
                    </div>
                  </form>
                </div>
      
          </div>

        </div>
  
    )
}

export default ChangePassword;