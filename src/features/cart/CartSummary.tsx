import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";

const subtotal = 32.9999;
const deliveryFee = 3.9999;
const tax = 2.9999;

function CartSummary() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/");
  };

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md !p-6">
        <h2 className="text-xl font-bold !mb-4">Order Summary</h2>

        <div className="space-y-3 !mb-6">
          <div className="flex justify-between !mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
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
              <span>${(subtotal + deliveryFee + tax).toFixed(2)}</span>
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
