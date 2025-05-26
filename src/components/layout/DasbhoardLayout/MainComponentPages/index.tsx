import { Search } from "lucide-react";
import { Input } from "../../../ui/input";
import AppPage from "./AppPage";

const MainComponent = () => {
  return (
    <main className="flex-1 p-6 mr-16 relative min-h-screen flex flex-col">
      {/* Other content can go here */}

      {/* <Outlet /> */}
   <AppPage/>
      {/* Sticky Search Bar */}
      <div className="mt-auto sticky bottom-10 flex justify-center w-full  ">
        <div className="relative max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Chat with our quckscribe"
            className="pl-10 pr-4 py-3 border-gray-200 rounded-full shadow-lg bg-white"
          />
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
