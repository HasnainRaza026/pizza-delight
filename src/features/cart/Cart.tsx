import Button from "../../ui/Button";
import EmptyCart from "./EmptyCart";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { CartItemType } from "../../types/CartItemType";
import { clearCart } from "./cartSlice";
import { successToast } from "../../utils/toastFunctions";

function Cart() {
  const { cartItems } = useSelector((state: RootState) => ({
    cartItems: state.cart.cartItems,
  }));
  const dispatch = useDispatch();
  console.log(cartItems.length);

  if (!cartItems.length) {
    return <EmptyCart />;
  }

  return (
    <div className="!py-12 bg-gray-50 min-h-screen">
      <div className="container !mx-auto !px-4">
        <h1 className="text-3xl font-bold !mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="!p-6">
                {cartItems.map((item: CartItemType) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className="flex !p-4 bg-gray-50 border-t border-gray-200">
                <Button className="!py-3">
                  <Link to="/">Continue Shopping</Link>
                </Button>
                <button
                  className="!ml-2 border border-gray-400 rounded !px-3 !py-2 text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    dispatch(clearCart());
                    successToast("Cart has been cleared");
                  }}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <CartSummary />
        </div>
      </div>
    </div>
  );
}

export default Cart;
