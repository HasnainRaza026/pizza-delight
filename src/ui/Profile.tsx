import { UserRoundPlus } from "lucide-react";
import { SidebarProps } from "../types/PlacedPropType";

function Profile({ placedOn, setIsSidebarOpen }: SidebarProps) {
  let placedOnCSS: string = "";
  if (placedOn === "header") placedOnCSS = "hidden sm:block";
  else if (placedOn === "sidebar") placedOnCSS = "block";

  const handleClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={`${placedOnCSS} cursor-pointer`}>
      <div
        onClick={handleClick}
        className="w-10 h-10 rounded-full bg-[var(--color-tomato)] flex justify-center items-center !pl-0.5 !pb-0.5"
      >
        <UserRoundPlus color="#ffffff" />
      </div>
    </div>
  );
}

export default Profile;
