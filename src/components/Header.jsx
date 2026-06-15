import React from "react";
import { MENU_ICON_URL, LOGO_URL, USER_ICON_URL } from "../utils/constants";

const Header = () => {
  
  return (
    <div className="grid grid-flow-col px-4 py-2 shadow-md items-center bg-white">
      <div className="flex col-span-1 items-center gap-3">
        <img
          className="h-8 cursor-pointer"
          src={MENU_ICON_URL}
          alt="menu"
        />
        <img
          className="h-10 cursor-pointer"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="col-span-10 flex justify-center items-center">
        <input
          type="text"
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-full outline-none focus:border-blue-500"
        />
        <button className="px-6 py-2 border border-l-0 border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 cursor-pointer flex items-center justify-center">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <img
          className="h-10 w-10 rounded-full cursor-pointer"
          src={USER_ICON_URL}
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
