import Button from "../../ui/Button";
import EmptyCart from "./EmptyCart";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import { CartItemType } from "../../types/CartItemType";
import { Link } from "react-router";

const items: CartItemType[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1581873372796-635b67ca2008?q=80&w=2070&auto=format&fit=crop",
    name: "Pepperoni",
    size: "large",
    toppings: ["cheeze"],
    quantity: 1,
    price: 7.99,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1581873372796-635b67ca2008?q=80&w=2070&auto=format&fit=crop",
    name: "Pepperoni",
    size: "large",
    toppings: ["cheeze"],
    quantity: 1,
    price: 7.99,
  },
];

function Cart() {
  if (false) {
    <EmptyCart />;
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
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className="flex !p-4 bg-gray-50 border-t border-gray-200">
                <Button className="!py-3">
                  <Link to="/">Continue Shopping</Link>
                </Button>
                <button
                  className="!ml-2 border border-gray-400 rounded !px-3 !py-2 text-gray-500 hover:text-gray-700"
                  onClick={() => {}}
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
