import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { CartItemType } from "../../types/CartItemType";
import { RootState } from "../../store";

type PropType = {
  type: string;
  headerOnMenuPage: string;
};

function CartIcon({ type, headerOnMenuPage }: PropType) {
  const { cartItems } = useSelector((state: RootState) => ({
    cartItems: state.cart.cartItems,
  }));

  const getCartQuantity = () => {
    let cartQuantity = 0;
    const _ = cartItems.map((item: CartItemType) => {
      cartQuantity += item.quantity;
    });
    return cartQuantity;
  };

  const quantity = getCartQuantity();
  return (
    <div
      className={`${type === headerOnMenuPage ? "hidden sm:block" : ""} hover:bg-[var(--color-hover)] !p-2 !mt-2 rounded-lg cursor-pointer`}
    >
      <Link to="/cart">
        <ShoppingCart className={quantity > 0 ? "absolute" : ""} />
        {quantity > 0 && (
          <div className="font-(family-name:--font-default) text-[10px] text-white rounded-full bg-[var(--color-red)] !px-1.5 !py-0.5 text-center relative -top-3.5 -right-4 md:text-xs md:!px-2 md:!py-1 md:-top-4">
            {quantity}
          </div>
        )}
      </Link>
    </div>
  );
}

export default CartIcon;
