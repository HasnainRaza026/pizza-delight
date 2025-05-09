import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router";
import Button from "../../ui/Button";
import { useFetchMenu } from "../../hooks/useFetchMenu";
import { useDispatch } from "react-redux";
import { updateActivePizzaDetail } from "../menu/menuSlice";

function EmptyCart() {
  const { menu } = useFetchMenu();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(
      updateActivePizzaDetail({
        ...menu[0],
        size: "",
        toppings: [],
        quantity: 1,
      })
    );
    navigate("/menu/1");
  };

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
          <div className="block sm:hidden">
            <Button className="!mx-auto">
              <Link to="/menu">Browse Our Menu</Link>
            </Button>
          </div>

          <div className="hidden sm:block">
            <Button onClick={handleClick} className="!mx-auto">
              <Link to="/menu/1">Browse Our Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
