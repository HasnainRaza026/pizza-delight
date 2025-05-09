import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { cartItem } from "./cartSlice";
import { RootState } from "../../store";

const deliveryFee = 3.9999;
const tax = 2.9999;

function CartSummary() {
  const { cartItems } = useSelector((state: RootState) => ({
    cartItems: state.cart.cartItems,
  }));
  const navigate = useNavigate();

  const getSubTotal = () => {
    return cartItems.reduce(
      (sum: number, item: cartItem) => sum + item.price,
      0
    );
  };

  const handleCheckout = () => {
    navigate("/");
  };

  // const subTotal = getSubTotal();

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md !p-6">
        <h2 className="text-xl font-bold !mb-4">Order Summary</h2>

        <div className="space-y-3 !mb-6">
          <div className="flex justify-between !mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span>${getSubTotal().toFixed(2)}</span>
          </div>
          {/* {promoApplied && (
            <div className="flex justify-between text-pizza-red">
              <span>Discount (10%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )} */}
          <div className="flex justify-between !mb-2">
            <span className="text-gray-600">Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between !mb-2">
            <span className="text-gray-600">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 !pt-3 !mt-3">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${(getSubTotal() + deliveryFee + tax).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <Button onClick={handleCheckout} className="w-full">
          Proceed to Checkout <ArrowRight className="!ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default CartSummary;
