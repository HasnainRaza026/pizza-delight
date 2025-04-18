import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { PizzaData } from "../../types/PizzaDataType";

type CardButtonProps = {
  children: React.ReactNode;
  handleClick: any;
};

type PizzaMenuCardProps = {
  pizza: PizzaData;
};

function PizzaMenuCard({ pizza }: PizzaMenuCardProps) {
  const [fav, setFav] = useState(false); //temp state
  const [cart, setCart] = useState(false); //temp state

  const [isHovered, seteIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => seteIsHovered(true)}
      onMouseLeave={() => seteIsHovered(false)}
      className="w-[298px] h-[116px] bg-white rounded-lg flex items-center gap-4 !p-2.5 shadow-md cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="w-24 h-24 rounded-lg overflow-hidden">
        <img
          src={pizza.image}
          alt={pizza.name}
          className={`w-full h-full object-cover object-center transition-transform duration-500 scale-100 ${isHovered ? "scale-110" : "scale-100"}`}
        />
      </div>
      <div>
        <div className="!mb-3.5 max-w-[166px]">
          <h3 className="text-[var(--color-font-black)] font-bold text-lg truncate !mb-1.5">
            {pizza.name}
          </h3>
          <p className="font-medium text-xs text-black/70 line-clamp-2">
            {pizza.description}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#15B33F] font-bold">{`$${pizza.price}`}</p>
          <div className="flex items-center gap-2.5">
            {cart ? (
              <div className="flex items-center gap-1.5">
                <CardButton handleClick={setCart}>
                  <Minus size={12} color={"white"} strokeWidth={2.5} />
                </CardButton>
                <p className="text-[var(--color-font-black)] text-sm font-(family-name:--font-default)">
                  3
                </p>
                <CardButton handleClick={setCart}>
                  <Plus size={12} color={"white"} strokeWidth={2.5} />
                </CardButton>
              </div>
            ) : (
              <CardButton handleClick={setCart}>
                <ShoppingCart size={12} color={"white"} strokeWidth={2.5} />
              </CardButton>
            )}

            <CardButton handleClick={setFav}>
              <Heart
                size={12}
                color={"white"}
                strokeWidth={2.5}
                fill={fav ? "white" : "none"}
              />
            </CardButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardButton({ children, handleClick }: CardButtonProps) {
  return (
    <button
      onClick={() => handleClick((prev) => !prev)}
      className="w-[22px] h-[22px] flex justify-center items-center bg-[var(--color-red)] rounded-full hover:bg-[var(--color-tomato)]"
    >
      {children}
    </button>
  );
}

export default PizzaMenuCard;
