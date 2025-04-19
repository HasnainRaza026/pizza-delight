import { Minus, Plus, Trash } from "lucide-react";
import { CartItemType } from "../../types/CartItemType";

type CartItemProp = {
  item: CartItemType;
};

function CartItem({ item }: CartItemProp) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center !py-4 border-b border-gray-200 last:border-0">
      <div className="flex-shrink-0 w-full sm:w-20 h-20 !mb-4 sm:!mb-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center rounded"
        />
      </div>

      <div className="flex-grow sm:!ml-4">
        <h3>{item.name}</h3>
        <div className="text-sm text-gray-500">
          {item.size && (
            <p>
              Size: {item.size.charAt(0).toUpperCase() + item.size.slice(1)}
            </p>
          )}
          {item.toppings && item.toppings.length > 0 && (
            <p>Toppings: {item.toppings.join(", ")}</p>
          )}
        </div>
        <div className="flex items-center justify-between !mt-2">
          <span className="font-medium">${item.price.toFixed(2)}</span>

          <div className="flex items-center">
            <button
              className="h-7 w-7 bg-[#faf8f5] border border-gray-200 rounded flex justify-center items-center hover:bg-gray-200"
              onClick={() => {}}
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="!mx-2 w-6 text-center">{item.quantity}</span>
            <button
              className="h-7 w-7 bg-[#faf8f5] border border-gray-200 rounded flex justify-center items-center hover:bg-gray-200"
              onClick={() => {}}
            >
              <Plus className="h-3 w-3" />
            </button>
            <button
              className="h-7 w-7 !ml-6 text-red-500 hover:text-red-700 hover:bg-transparent"
              onClick={() => {}}
            >
              <Trash className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
