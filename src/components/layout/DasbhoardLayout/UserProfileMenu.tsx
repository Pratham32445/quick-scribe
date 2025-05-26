import { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  Zap,
  Settings,
  Users,
  HelpCircle,
  MessageCircle,
  LogOut,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../ui/avatar";
import { Button } from "../../ui/button";

export default function UserProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger button */}
      <Button
        variant="ghost"
        className="flex w-full items-center gap-2 py-2 justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border border-gray-300">
            <AvatarImage
              src="/placeholder.svg?height=30&width=30"
              alt="User avatar"
            />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-gray-700">Siddhartha</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </Button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2  bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
          <div className="p-4 flex items-center gap-3 bg-blue-50 rounded-t-xl">
            <Avatar className="h-8 w-8 border border-gray-300">
              <AvatarImage
                src="/placeholder.svg?height=30&width=30"
                alt="User avatar"
              />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-blue-600 font-medium text-sm">
                Siddhartha Nan...
              </span>
              <span className="text-gray-500 text-xs">
                1234siddharth391@...
              </span>
            </div>
          </div>

          <div className="py-2">
            {[
              { icon: Zap, label: "Upgrade Plan", color: "text-blue-600" },
              { icon: Settings, label: "Account Settings" },
              { icon: Users, label: "Invite Teammates" },
              { icon: HelpCircle, label: "Help Center" },
              { icon: MessageCircle, label: "Contact Support" },
              { icon: LogOut, label: "Logout" },
            ].map(({ icon: Icon, label, color }, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`w-full justify-start px-4 py-3 h-auto  font-medium rounded-lg hover:bg-gray-100 transition ${
                  color || "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5 mr-3 text-gray-600" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
