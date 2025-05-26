import { BookOpen, Database, Home, LayoutGrid, Plus } from "lucide-react";
import { Progress } from "../../ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white border-r z-20 transition-all duration-300 ${
        isOpen ? "w-[230px]" : "w-[70px]"
      }`}
    >
      {/* Logo */}
      <Link to={"/"}>
        <div
          className={`flex items-center p-4 border-b ${
            !isOpen && "justify-center"
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
              fill="currentColor"
            >
              <path d="M12,2C9.01,2 6.5,3.59 5.05,6.05C3.59,8.5 3.59,11.5 5.05,13.95C6.5,16.41 9.01,18 12,18C15.54,18 18.5,15.54 18.5,12C18.5,8.46 15.54,6 12,6C10.34,6 9,7.34 9,9C9,10.66 10.34,12 12,12C13.66,12 15,10.66 15,9C15,7.34 13.66,6 12,6C9.79,6 8,7.79 8,10C8,12.21 9.79,14 12,14C14.21,14 16,12.21 16,10C16,7.79 14.21,6 12,6" />
            </svg>
          </div>
          {isOpen && <span className="font-bold text-lg">QuikScribe</span>}
        </div>
      </Link>

      {/* Workspace Selector */}

      {/* Sidebar Content */}
      <div className="overflow-y-auto h-screen ">
        <div className={`p-4 ${!isOpen && "px-2"}`}>
          {/* Utilities Section */}
          <div className="mb-4">
            {isOpen && (
              <div className="text-sm font-medium text-gray-500 mb-3">
                Utilities
              </div>
            )}

            <div className="space-y-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`flex items-center ${
                        isOpen ? "p-2" : "p-2 justify-center"
                      } text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer`}
                    >
                      <Home className="w-5 h-5 min-w-5" />
                      {isOpen && <span className="ml-2">Home</span>}
                    </div>
                  </TooltipTrigger>
                  {!isOpen && (
                    <TooltipContent side="right">
                      <p>Home</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`flex items-center ${
                        isOpen ? "p-2" : "p-2 justify-center"
                      } text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 min-w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {isOpen && <span className="ml-2">Quiksribe Chat</span>}
                    </div>
                  </TooltipTrigger>
                  {!isOpen && (
                    <TooltipContent side="right">
                      <p>Quiksribe Chat</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`flex items-center ${
                        isOpen ? "p-2" : "p-2 justify-center"
                      } text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer`}
                    >
                      <LayoutGrid className="w-5 h-5 min-w-5" />
                      {isOpen && <span className="ml-2">Apps</span>}
                    </div>
                  </TooltipTrigger>
                  {!isOpen && (
                    <TooltipContent side="right">
                      <p>Apps</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`flex items-center ${
                        isOpen
                          ? "p-2 justify-between w-full"
                          : "p-2 justify-center"
                      } text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer`}
                    >
                      <BookOpen className="w-5 h-5 min-w-5" />
                      {isOpen && (
                        <span className="ml-2 flex items-center w-full justify-between">
                          <span>Folder</span>
                          <Plus
                            size={16}
                            className="text-blue-600 cursor-pointer"
                          />
                        </span>
                      )}
                    </div>
                  </TooltipTrigger>
                  {!isOpen && (
                    <TooltipContent side="right">
                      <p>Folder</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Storage Widget */}
          <div className="absolute bottom-0 w-[200px]">
            {isOpen && (
              <>
                <div
                  className={`bg-gradient-to-r  from-blue-50 to-blue-100 rounded-lg p-4 mt-6 ${
                    !isOpen && "mx-2"
                  }`}
                >
                  <div
                    className={`flex items-center mb-2 ${
                      !isOpen && "justify-center"
                    }`}
                  >
                    <Database className="w-5 h-5 text-blue-500 mr-2" />
                    {isOpen && (
                      <span className="text-blue-600 font-medium">
                        Get Extra Space
                      </span>
                    )}
                  </div>
                  {isOpen && (
                    <>
                      <div className="text-xs text-blue-600 mb-2">28/23 GB</div>

                      <Progress
                        value={80}
                        className="h-1.5 bg-white"
                        // indicatorclassname="bg-blue-500"
                      />
                    </>
                  )}

                  {isOpen && (
                    <div className="text-xs text-center mt-2 text-blue-600">
                      Progress
                    </div>
                  )}
                </div>
                <div className="flex justify-center"> v4.0.0</div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Version */}
    </div>
  );
}
