import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { PizzaData } from "../../types/PizzaDataType";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateActivePizzaDetail } from "../../features/menu/menuSlice";
import scrollToTop from "../../utils/scrollToTop";
import { CartItemType } from "../../types/CartItemType";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../features/cart/cartSlice";
import { successToast } from "../../utils/toastFunctions";
import { RootState } from "../../store";
import CardButton from "../CardButton";
import FavouriteButton from "../../features/favourite/FavouriteButton";

type PizzaMenuCardProps = {
  pizza: PizzaData;
  placedOn: string;
};

function PizzaMenuCard({ pizza, placedOn }: PizzaMenuCardProps) {
  const [isHovered, seteIsHovered] = useState<boolean>(false);

  const { id, cartItems } = useSelector((state: RootState) => ({
    id: state.menu.ActivePizzaDetail.id,
    cartItems: state.cart.cartItems,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = () => {
    dispatch(
      updateActivePizzaDetail({ ...pizza, size: "", toppings: [], quantity: 1 })
    );
    navigate(`/menu/${pizza.id}`);
    scrollToTop();
  };

  const isPizzaInCart = (id: number) => {
    // returns true as soon as it finds a matching id in cartItems
    return cartItems.some((item: CartItemType) => item.id === id);
  };

  const getPizzaQuantityInCart = (id: number) => {
    const pizza = cartItems.filter((item: CartItemType) => item.id === id);
    return pizza[0].quantity;
  };

  const handleAddToCart = (pizza: PizzaData) => {
    dispatch(
      addToCart({
        id: pizza.id,
        image: pizza.image,
        name: pizza.name,
        price: pizza.price,
        size: "medium",
        toppings: [],
        quantity: 1,
      })
    );
    successToast(`${pizza.name} added to cart`);
  };

  return (
    <div
      onMouseEnter={() => seteIsHovered(true)}
      onMouseLeave={() => seteIsHovered(false)}
      onClick={handleOnClick}
      className={`w-[298px] h-[116px] bg-white rounded-lg flex items-center gap-4 !p-2.5 shadow-md cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${id === pizza.id ? "border-l-8" : "border-l-4"} border-[var(--color-red)] border`}
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
          <p
            className={`font-medium text-xs text-black/70 ${placedOn === "menu" ? "line-clamp-3" : "line-clamp-2"}`}
          >
            {pizza.description}
          </p>
        </div>

        {placedOn === "home" && (
          <div className="flex justify-between">
            <p className="text-[#15B33F] font-bold">{`$${pizza.price}`}</p>
            <div className="flex items-center gap-2.5">
              {isPizzaInCart(pizza.id) ? (
                <div className="flex items-center gap-1.5">
                  <CardButton
                    onClick={(e) => {
                      e.stopPropagation(); // ← prevent bubbling
                      dispatch(decrementQuantity(pizza.id));
                      successToast(`${pizza.name} removed successfully`);
                    }}
                  >
                    <Minus size={12} color={"white"} strokeWidth={2.5} />
                  </CardButton>
                  <p className="text-[var(--color-font-black)] text-sm font-(family-name:--font-default)">
                    {getPizzaQuantityInCart(pizza.id)}
                  </p>
                  <CardButton
                    onClick={(e) => {
                      e.stopPropagation(); // ← prevent bubbling
                      dispatch(incrementQuantity(pizza.id));
                      successToast(`${pizza.name} added successfully`);
                    }}
                  >
                    <Plus size={12} color={"white"} strokeWidth={2.5} />
                  </CardButton>
                </div>
              ) : (
                <CardButton
                  onClick={(e) => {
                    e.stopPropagation(); // ← prevent bubbling
                    handleAddToCart(pizza);
                  }}
                >
                  <ShoppingCart size={12} color={"white"} strokeWidth={2.5} />
                </CardButton>
              )}

              <FavouriteButton id={pizza.id} placedOn="home" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PizzaMenuCard;
