import React from "react";

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
};

function Button({ text, icon }: ButtonProps) {
  return (
    <button className="text-white flex items-center gap-4 !px-6 !py-3.5 rounded-md bg-[var(--color-red)]">
      {text}
      {icon}
    </button>
  );
}

export default Button;
