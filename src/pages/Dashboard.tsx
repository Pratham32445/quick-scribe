"use client";

import Header from "@/components/layout/DasbhoardLayout/Header";
import MainComponent from "@/components/layout/DasbhoardLayout/MainComponentPages";
import RightSidebar from "@/components/layout/DasbhoardLayout/RightSidebar";
import Sidebar from "@/components/layout/DasbhoardLayout/Sidebar";
import { supabase } from "@/supabase/config/supbaseClient";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigate();

  const toggleLeftSidebar = () => {
    setLeftSidebarOpen(!leftSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setRightSidebarOpen(!rightSidebarOpen);
  };

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsLoading(false);
      if (!user) {
        navigation("/");
      }
    };
    getUser();
  }, []);

  if (isLoading) {
    return <div>Loading...</div> 
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <Sidebar isOpen={leftSidebarOpen} />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          leftSidebarOpen ? "ml-[230px]" : "ml-[70px]"
        } ${rightSidebarOpen ? "mr-[280px]" : "mr-0"}`}
      >
        {/* Header */}
        <Header
          toggleLeftSidebar={toggleLeftSidebar}
          toggleRightSidebar={toggleRightSidebar}
          rightSidebarOpen={rightSidebarOpen}
        />

        {/* Main Content Area */}

        <MainComponent />
      </div>

      {/* Right Sidebar */}
      <RightSidebar
        isOpen={rightSidebarOpen}
        toggleRightSidebar={toggleRightSidebar}
      />
    </div>
  );
}
