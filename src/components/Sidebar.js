import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { render } from "react-dom";
import Login from "./Login";
import SoundSettings from "./popup_components/SoundSettings";
import ShareLink from "./popup_components/ShareLink";

export default function Sidebar() {
    const handleLogout = () => {
        render(<Login />, document.getElementById("root"));
    }

    const [date, setDate] = React.useState(new Date());
    const changeDate = (e) => { 
        setDate(e);
    }

    const openSoundSettings = () => {
        render(<SoundSettings />, document.getElementById("root"));
    }

    const openShareLinkSettings = () => {
        render(<ShareLink />, document.getElementById("root"));
    }

    return (
        <aside className="w-96 h-screen bg-[#EB3C27] justify-center" aria-label="Sidebar">
            <div className="rounded-md shadow-sm space-y-px mr-6 ml-6">

                <div className="text-center "> 
                    <img className="scale-75 " src={require("../images/logo-dark.png")}></img>
                </div>
            
                <div className="ml-6 mr-6 md:h-full ">
                    <Calendar value={date} onChange={changeDate} className="-mt-6 "/>
                    
                </div>

                <div className="mt-10">
                    <ul className="text-md text-center">
                        <li className="mt-2">
                            < button className="font-medium text-white hover:text-black"  >
                            General
                            </button >
                        </li>
                        <li className="mt-2">
                            < button className="font-medium text-white hover:text-black"  >
                            Timer
                            </button >
                        </li>
                        <li className="mt-2">
                            < button className="font-medium text-white hover:text-black" onClick={openSoundSettings} >
                            Sound and Notification
                            </button >
                        </li>
                        <li className="mt-2">
                            < button className="font-medium text-white hover:text-black" onClick={openShareLinkSettings}>
                            Share Link
                            </button >
                        </li>
                    </ul>
                </div>
                
                <div>
                    <button type="button" id="logout-button" className="w-full justify-center my-2 text-white bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 " onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            
            </div>
            
        </aside>
    )
}
