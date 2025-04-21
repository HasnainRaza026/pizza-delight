import { X } from "lucide-react";
import PizzaSizeSelector from "./SelectSize";

function PizzaDetail() {
  return (
    <div className="w-[292px] bg-gray-50 rounded-2xl !p-5 flex flex-col gap-7">
      {/* Image */}
      <div className="relative">
        <img
          src="/src/assets/img-hero.jpg"
          alt="Pizza"
          className="w-[252px] h-[185px] object-cover object-center rounded-xl relative"
        />
        <button className="absolute w-7 h-7 flex justify-center items-center -top-3 -right-3 z-10 bg-[var(--color-red)] rounded-full hover:bg-[var(--color-tomato)]">
          <X className="text-white w-5 h-5" />
        </button>
      </div>

      {/* Title and Description */}
      <div>
        <h1 className="text-2xl font-bold !mb-2.5">Pepperoni</h1>
        <p className="text-sm font-medium text-black/70">
          America's favorite topped with pepperoni slices, mozzarella, and
          tomato sauce.
        </p>
      </div>

      {/* Size */}
      <div>
        {/* <h2 className="text-xl font-bold">Size</h2> */}
        <PizzaSizeSelector />
      </div>
    </div>
  );
}

export default PizzaDetail;
