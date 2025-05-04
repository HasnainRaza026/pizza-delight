import { Minus, Plus } from "lucide-react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import toast from "react-hot-toast";
import { sizeOptions, toppingOptions } from "./options";
import { decrementQuatity, incrementQuatity } from "./menuSlice";

function AddToCart() {
  const dispatch = useDispatch();
  const { ActivePizzaDetail } = useSelector((state: any) => ({
    ActivePizzaDetail: state.menu.ActivePizzaDetail,
  }));

  const getSizePrice = () => {
    let sizePrice = 0;
    const _ = sizeOptions.map((item) => {
      if (item.key === ActivePizzaDetail.size) sizePrice = item.price;
    });
    return sizePrice;
  };

  const getToppingsPrice = () => {
    let toppingsPrice = 0;
    const _ = toppingOptions.map((item) => {
      if (ActivePizzaDetail.toppings.includes(item.key))
        toppingsPrice += item.price;
    });
    return toppingsPrice;
  };

  const totalPrice = (
    Number(ActivePizzaDetail.price) * Number(ActivePizzaDetail.quantity) +
    Number(getSizePrice()) +
    Number(getToppingsPrice())
  ).toFixed(2);

  const handleAddToCart = () => {
    if (!ActivePizzaDetail.size) {
      toast("Please select the size", {
        icon: "🛈",
      });
      return;
    }
    dispatch(
      addToCart({
        id: ActivePizzaDetail.id,
        name: ActivePizzaDetail.name,
        image: ActivePizzaDetail.image,
        price: ActivePizzaDetail.price,
        size: ActivePizzaDetail.size,
        toppings: ActivePizzaDetail.toppings,
        quantity: ActivePizzaDetail.quantity,
      })
    );
    toast.success(`${ActivePizzaDetail.name} added to cart`);
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
