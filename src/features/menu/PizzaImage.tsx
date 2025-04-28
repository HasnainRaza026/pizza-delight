import { X } from "lucide-react";
import { useMenu } from "./MenuContext";

function PizzaImage() {
  const { toggleModal } = useMenu();

  return (
    <div className="relative">
      <img
        src="/src/assets/img-hero.jpg"
        alt="Pizza"
        className="w-[252px] h-[185px] object-cover object-center rounded-xl relative md:w-[388px] md:h-[250px] lg:w-[520px] lg:h-[300px]"
      />
      <button
        onClick={toggleModal}
        className="absolute w-7 h-7 flex justify-center items-center -top-3 -right-3 z-10 bg-[var(--color-red)] rounded-full hover:bg-[var(--color-tomato)] sm:hidden"
      >
        <X className="text-white w-5 h-5" />
      </button>
    </div>
  );
}

export default PizzaImage;
