import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isOpen)
 // Early return pattern
  if(!isMenuOpen) return null;
  return (
    <div className="w-48 min-h-screen shadow-lg p-4 bg-white">
      <ul className="space-y-2 border-b pb-4">
        <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">🏠 Home</li>
        <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">🎬 Shorts</li>
        <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">📺 Subscriptions</li>
      </ul>

      <h1 className="font-semibold text-lg mt-4 mb-3">You</h1>
      <ul className="space-y-2 border-b pb-4">
        <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">🕒 History</li>
        <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">▶️ Your Videos</li>
        <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">⏰ Watch Later</li>
        <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">👍 Liked Videos</li>
      </ul>

      <h1 className="font-semibold text-lg mt-4 mb-3">Subscriptions</h1>
      <ul className="space-y-2">
        <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">🎵 Music</li>
        <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">🎮 Gaming</li>
        <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">💻 Coding</li>
        <li className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">📱 Tech</li>
      </ul>
    </div>
  );
};

export default Sidebar;