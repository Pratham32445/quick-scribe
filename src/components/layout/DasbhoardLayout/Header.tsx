"use client";

import { useState } from "react";
import { Bell, Settings, User } from "lucide-react";
import { Button } from "../../ui/button";
import NotificationCard from "./NotificationCard";

export default function Header({
  toggleLeftSidebar,
  toggleRightSidebar,
  rightSidebarOpen,
}: {
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
  rightSidebarOpen: boolean;
}) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="bg-white border-b h-16 flex items-center px-4 sticky top-0 z-30">
      {/* Left side burger menu */}
      <Button
        variant="ghost"
        size="icon"
        className="mr-2"
        onClick={toggleLeftSidebar}
      >
        <div className="flex flex-col space-y-1.5">
          <div className="w-5 h-0.5 bg-gray-600"></div>
          <div className="w-3.5 h-0.5 bg-gray-600 ml-1.5"></div>
          <div className="w-5 h-0.5 bg-gray-600"></div>
        </div>
      </Button>

      {/* Logo */}
      <div className="flex items-center mr-4">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-white"
            fill="currentColor"
          >
            <path d="M12,2C9.01,2 6.5,3.59 5.05,6.05C3.59,8.5 3.59,11.5 5.05,13.95C6.5,16.41 9.01,18 12,18C15.54,18 18.5,15.54 18.5,12C18.5,8.46 15.54,6 12,6C10.34,6 9,7.34 9,9C9,10.66 10.34,12 12,12C13.66,12 15,10.66 15,9C15,7.34 13.66,6 12,6C9.79,6 8,7.79 8,10C8,12.21 9.79,14 12,14C14.21,14 16,12.21 16,10C16,7.79 14.21,6 12,6" />
          </svg>
        </div>
        <span className="font-bold text-lg hidden md:inline-block">
          QuikScribe
        </span>
      </div>

      {/* Right side icons */}
      <div className="flex items-center ml-auto">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          {showNotifications && <NotificationCard />}
        </div>

        <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mx-2 overflow-hidden">
          <User className="h-5 w-5 text-white" />
        </div>
        {rightSidebarOpen ? (
          <Button variant="ghost" size="icon" onClick={toggleRightSidebar}>
            <Settings className="h-5 w-5" />
          </Button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
