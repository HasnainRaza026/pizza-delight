import { Minus, Plus } from "lucide-react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import { sizeOptions, toppingOptions } from "./options";
import { decrementQuatity, incrementQuatity } from "./menuSlice";
import { iconToast, successToast } from "../../utils/toastFunctions";
import { RootState } from "../../store";

function AddToCart() {
  const dispatch = useDispatch();
  const { ActivePizzaDetail } = useSelector((state: RootState) => ({
    ActivePizzaDetail: state.menu.ActivePizzaDetail,
  }));

  const getSizePrice = () => {
    return (
      sizeOptions.find((o) => o.key === ActivePizzaDetail.size)?.price ?? 0
    );
  };

  const getToppingsPrice = () => {
    return toppingOptions.reduce(
      (sum, o) =>
        ActivePizzaDetail.toppings.includes(o.key) ? sum + o.price : sum,
      0
    );
  };

  const totalPrice = (
    Number(ActivePizzaDetail.price) * Number(ActivePizzaDetail.quantity) +
    Number(getSizePrice()) +
    Number(getToppingsPrice())
  ).toFixed(2);

  const handleAddToCart = () => {
    if (!ActivePizzaDetail.size) {
      iconToast("Please select the size", "⛔");
      return;
    }
    dispatch(
      addToCart({
        id: ActivePizzaDetail.id,
        name: ActivePizzaDetail.name,
        image: ActivePizzaDetail.image,
        price: Number(totalPrice),
        size: ActivePizzaDetail.size,
        toppings: ActivePizzaDetail.toppings,
        quantity: ActivePizzaDetail.quantity,
        basePrice: ActivePizzaDetail.price,
      })
    );
    successToast(`${ActivePizzaDetail.name} added to cart`);
  };

  return (
    <div className="!space-y-5">
      <div className="font-(family-name:--font-default) flex justify-between">
        <p className="text-xl font-bold md:text-2xl">Total: ${totalPrice}</p>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => {
              dispatch(decrementQuatity());
            }}
            className="w-6 h-6 rounded-full flex justify-center items-center bg-[var(--color-red)] hover:bg-[var(--color-tomato)] md:w-7 md:h-7"
          >
            <Minus color="white" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <p className="text-lg text-[var(--color-font-black)] md:text-2xl">
            {ActivePizzaDetail.quantity}
          </p>
          <button
            onClick={() => {
              dispatch(incrementQuatity());
            }}
            className="w-6 h-6 rounded-full flex justify-center items-center bg-[var(--color-red)] hover:bg-[var(--color-tomato)] md:w-7 md:h-7"
          >
            <Plus color="white" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
      <Button onClick={handleAddToCart} className="w-full !py-2">
        Add to Cart
      </Button>
    </div>
  );
}

export default AddToCart;
