"use client";

import {
  Bell,
  Settings,
  User,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import UserProfileMenu from "./UserProfileMenu";

export default function RightSidebar({ isOpen, toggleRightSidebar } : {
    isOpen : boolean,
    toggleRightSidebar : (arg : boolean) => void; 
}) {
  // Quick access icons for collapsed state
  const quickAccessIcons = [
    { icon: Settings, color: "text-purple-600", tooltip: "Settings", onClick: () => toggleRightSidebar(!isOpen) },
    { icon: User, color: "text-blue-600", tooltip: "Profile" },
    { icon: Bell, color: "text-yellow-600", tooltip: "Notifications" },
   
  ];

  return (
    <>
      {/* Collapsed state - floating circular icons */}
      {!isOpen && (
        <div className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col items-center gap-4 z-20">
          <TooltipProvider>
            {quickAccessIcons.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div 
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors border"
                    onClick={item.onClick || undefined}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>{item.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      )}

      {/* Expanded state - full sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white border-l z-20 transition-all duration-300 rounded-l-lg shadow-lg ${
          isOpen ? "w-[280px]" : "w-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
         
          <div className="mb-6">
            <div className="space-y-4">
              <UserProfileMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
