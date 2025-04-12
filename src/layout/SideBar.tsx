import { X } from "lucide-react";
import Phone from "../ui/Phone";
import Profile from "../ui/Profile";
import Navigation from "./Navigation";
import { useEffect, useRef } from "react";

type SidebarToggleProp = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (state: boolean) => void;
};

function SideBar({ isSidebarOpen, setIsSidebarOpen }: SidebarToggleProp) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, setIsSidebarOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`w-full h-dvh fixed z-[999] top-0 bg-white/80 backdrop-blur-md !py-4 !px-5 shadow-2xl transition-all duration-700 ease-out ${isSidebarOpen ? "right-0" : "-right-[500px]"} sm:w-90`}
    >
      <div
        onClick={() => setIsSidebarOpen(false)}
        className="block sm:hidden !mb-8"
      >
        <X size={30} />
      </div>
      <div className="flex justify-between items-center !mb-7">
        <Phone placedOn={"sidebar"} />
        <Profile placedOn={"sidebar"} setIsSidebarOpen={setIsSidebarOpen} />
      </div>
      <Navigation placedOn={"sidebar"} setIsSidebarOpen={setIsSidebarOpen} />
    </div>
  );
}

export default SideBar;
