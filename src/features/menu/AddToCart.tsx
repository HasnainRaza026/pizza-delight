import { Minus, Plus } from "lucide-react";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

function AddToCart() {
  const price = useSelector((state) => state.menu.ActivePizzaDetail.price);
  return (
    <div className="!space-y-5">
      <div className="font-(family-name:--font-default) flex justify-between">
        <p className="text-xl font-bold md:text-2xl">Total: ${price}</p>
        <div className="flex gap-4 items-center">
          <button className="w-6 h-6 rounded-full flex justify-center items-center bg-[var(--color-red)] hover:bg-[var(--color-tomato)] md:w-7 md:h-7">
            <Minus color="white" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <p className="text-lg text-[var(--color-font-black)] md:text-2xl">
            3
          </p>
          <button className="w-6 h-6 rounded-full flex justify-center items-center bg-[var(--color-red)] hover:bg-[var(--color-tomato)] md:w-7 md:h-7">
            <Plus color="white" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
      <Button className="w-full !py-2">Add to Cart</Button>
    </div>
  );
}

export default AddToCart;
