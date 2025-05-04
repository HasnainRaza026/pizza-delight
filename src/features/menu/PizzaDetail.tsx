import SelectSize from "./SelectSize";
import SelectTopping from "./SelectTopping";
import AddToCart from "./AddToCart";
import PizzaImage from "./PizzaImage";
import TitleAndDescription from "./TitleAndDescription";

function PizzaDetail() {
  return (
    <>
      {/* For Mobile */}
      <div className="fixed z-50 top-0 left-0 w-full bg-black/50 sm:hidden">
        <div className="w-[292px] h-dvh overflow-scroll bg-white rounded-2xl !p-5 flex flex-col gap-7 shadow-2xl !mx-auto !pb-15 !mt-8 no-scrollbar">
          <PizzaImage />
          <TitleAndDescription />
          <SelectSize />
          <SelectTopping />
          <AddToCart />
        </div>
      </div>

      {/* For sm to lg Screens */}
      <div className="hidden sm:block">
        <div className=" w-[292px] h-auto bg-[#b9b9b9]/6 rounded-2xl !p-5 flex flex-col gap-7 shadow-2xl border-t-14 border-[var(--color-red)] md:w-[428px] lg:w-[560px]">
          <PizzaImage />
          <TitleAndDescription />
          <SelectSize />
          <SelectTopping />
          <AddToCart />
        </div>
      </div>
    </>
  );
}

export default PizzaDetail;
