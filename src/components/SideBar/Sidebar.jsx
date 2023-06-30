import React from "react";
import { PiListDashesDuotone } from 'react-icons/pi';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 z-30  w-64 h-screen transition-transform translate-x-full sm:translate-x-0 ">
      <div class="h-full px-4 py-4 overflow-y-auto bg-gray-50 flex flex-col justify-between items-center">
        {/* Header */}
        <div>
        <h1 className="text-5xl flex items-center p-4"> <PiListDashesDuotone /> kanban</h1>
        <h2 className="text-2xl flex justify-center">All Boards</h2>
        </div>

        {/* Buttons */}
        <div>
          <ul>
            <li>Platform Lunch</li>
            <li>Marketing plan</li>
            <li>Marketing map</li>
            <li>Create New Board</li>
          </ul>
        </div>

        {/* Light/dark button */}
        <div>
          <button>Light/dark</button>
        </div>

        {/* Hide Sidebar */}
        <div>
          <button>Hide sidebar</button>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
