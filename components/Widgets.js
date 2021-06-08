import { SearchIcon} from "@heroicons/react/outline";
import {DotsHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid";

import React from "react";



const   Widgets = (props) => {
  const [state, setState] = React.useState([
    { id: 4, image: "/images/fawad4.jpg", name: "Javed Khan" },
 
    { id: 7, image: "/images/profile.jfif", name: "Saeed Khan" },

  ]);
  const openChat = (user) => {
    props.openChat(user);
  };

    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                    <div className="flex space-x-2">
       
                    <SearchIcon className="h-6" />
                    <VideoCameraIcon className="h-6" /> 
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>
            <div className="chatBar">
                {state.map((user) => (
                    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer rounded-xl" key={user.id}
                        key={user.id}
                        onClick={() => openChat(user)}>
                        <img  className="rounded-full"
                            width={50}
                            height={50}
                            layout="fixed"
                            src={user.image} alt="user" />
           
                        <p>{user.name}</p>
                        <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce">
                        </div>
                     </div>
                ))}

            </div>
            
            

            
        </div>
        );
}

export default Widgets;





