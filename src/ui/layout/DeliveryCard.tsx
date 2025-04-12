import React from "react";

type DeliveryCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function DeliveryCard({ icon, title, description }: DeliveryCardProps) {
  return (
    <div className="w-[220px] h-[250px] flex flex-col justify-center items-center gap-3 !p-3.5 shadow-lg bg-black/4 rounded-md">
      {icon}
      <div className="text-center">
        <h3 className="text-[var(--color-font-black)] font-bold text-lg !mb-1">
          {title}
        </h3>
        <p className="font-medium text-xs text-black/70">{description}</p>
      </div>
    </div>
  );
}

export default DeliveryCard;
