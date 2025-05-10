import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import getSubTotal from "../../utils/getSubTotal";
import { deliveryFee, tax } from "../../data/fees";

function CartSummary() {
  const { cartItems } = useSelector((state: RootState) => ({
    cartItems: state.cart.cartItems,
  }));
  const navigate = useNavigate();

  const subTotal = getSubTotal(cartItems);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md !p-6">
        <h2 className="text-xl font-bold !mb-4">Order Summary</h2>

        <div className="space-y-3 !mb-6">
          <div className="flex justify-between !mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
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
              <span>${(subTotal + deliveryFee + tax).toFixed(2)}</span>
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
