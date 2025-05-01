import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function PizzaImage() {
  const navigate = useNavigate();
  const image = useSelector((state) => state.menu.ActivePizzaDetail.image);
  return (
    <div className="relative">
      <img
        src={image}
        alt="Pizza"
        className="w-[252px] h-[185px] object-cover object-center rounded-xl relative md:w-[388px] md:h-[250px] lg:w-[520px] lg:h-[300px]"
      />
      <button
        onClick={() => navigate("/menu")}
        className="absolute w-7 h-7 flex justify-center items-center -top-3 -right-3 z-10 bg-[var(--color-red)] rounded-full hover:bg-[var(--color-tomato)] sm:hidden"
      >
        <X className="text-white w-5 h-5" />
      </button>
    </div>
  );
}

export default PizzaImage;
