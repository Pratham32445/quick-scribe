
import { useState } from "react";
import { ChevronDown, ChevronRight, Plus, Folder } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";

export default function FolderStructure() {
  const [folders, setFolders] = useState(["frontend"]);
  const [newFolderName, setNewFolderName] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const addFolder = () => {
    if (newFolderName.trim() !== "") {
      setFolders([...folders, newFolderName]);
      setNewFolderName("");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md w-full">
      <div
        className="flex items-center justify-between cursor-pointer bg-blue-100 p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-blue-700 flex items-center gap-2">
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />} FOLDERS
        </span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Plus size={16} className="text-blue-600 cursor-pointer" onClick={addFolder} />
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Add Folder</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {isOpen && (
        <div className="mt-2 space-y-2">
          {folders.map((folder, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
              <Folder size={16} />
              <span>{folder}</span>
            </div>
          ))}
          <div className="flex mt-2">
            <input
              type="text"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              placeholder="New folder name"
              className="p-1 border rounded-md w-full"
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={addFolder}
                    className="ml-2 p-1 bg-blue-500 text-white rounded-md"
                  >
                    Add
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Create a new folder</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      )}
    </div>
  );
}