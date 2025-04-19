import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="!py-16 bg-gray-50 min-h-screen">
      <div className="container !mx-auto !px-4 text-center">
        <div className="bg-white !p-8 rounded-lg shadow-md max-w-md !mx-auto">
          <div className="text-pizza-red !mb-4">
            <ShoppingCart className="h-16 w-16 !mx-auto" />
          </div>
          <h1 className="text-2xl font-bold !mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 !mb-6">
            Looks like you haven't added any pizzas to your cart yet.
          </p>
          <Button>
            <Link to="/menu">Browse Our Menu</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
