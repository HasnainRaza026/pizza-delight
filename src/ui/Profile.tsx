import { UserRoundPlus } from "lucide-react";

function Profile() {
  return (
    <div className="hidden sm:block cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-[var(--color-tomato)] flex justify-center items-center !pl-0.5 !pb-0.5">
        <UserRoundPlus color="#ffffff" />
      </div>
    </div>
  );
}

export default Profile;
