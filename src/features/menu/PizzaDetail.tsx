import { Minus, Plus, X } from "lucide-react";
import SelectSize from "./SelectSize";
import SelectTopping from "./SelectTopping";
import Button from "../../ui/Button";
import { useMenu } from "./MenuContext";

function PizzaDetail() {
  const { toggleModal } = useMenu();

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-black/50">
      <div className="w-[292px] h-dvh overflow-scroll bg-white rounded-2xl !p-5 flex flex-col gap-7 shadow-2xl !mx-auto !pb-15 !mt-8 no-scrollbar">
        {/* Image */}
        <div className="relative">
          <img
            src="/src/assets/img-hero.jpg"
            alt="Pizza"
            className="w-[252px] h-[185px] object-cover object-center rounded-xl relative"
          />
          <button
            onClick={toggleModal}
            className="absolute w-7 h-7 flex justify-center items-center -top-3 -right-3 z-10 bg-[var(--color-red)] rounded-full hover:bg-[var(--color-tomato)]"
          >
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

        {/* Select Size */}
        <SelectSize />

        {/* Select Topping */}
        <SelectTopping />

        {/* Add to Cart */}
        <div className="!space-y-5">
          <div className="font-(family-name:--font-default) flex justify-between">
            <p className="text-xl font-bold">Total: $14.99</p>
            <div className="flex gap-4 items-center">
              <button className="w-6 h-6 rounded-full flex justify-center items-center bg-[var(--color-red)] hover:bg-[var(--color-tomato)]">
                <Minus color="white" size={16} />
              </button>
              <p className="text-lg text-[var(--color-font-black)]">3</p>
              <button className="w-6 h-6 rounded-full flex justify-center items-center bg-[var(--color-red)] hover:bg-[var(--color-tomato)]">
                <Plus color="white" size={16} />
              </button>
            </div>
          </div>
          <Button className="w-full !py-2">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default PizzaDetail;
