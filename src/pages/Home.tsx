import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

function HomePage() {
  return (
    // Hero Section
    <div className="relative text-white text-center md:text-start">
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('./src/assets/img-hero.jpg')",
          filter: "brightness(0.4)",
        }}
      ></div>
      <div className="relative flex flex-col gap-12 justify-center items-center !px-7 !py-32 md:items-start">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Authentic Italian{" "}
            <span className="md:block">
              <span className="text-[var(--color-red)]">Pizzas</span> Delivered
              To{" "}
            </span>
            Your Door
          </h1>
          <p className="opacity-80 sm:text-xl">
            Hand-crafted with premium ingredients, our pizzas
            <span className="md:block">
              {" "}
              bring the authentic taste of Italy to your home.
            </span>
          </p>
        </div>
        <Button text="Order Now" icon={<ArrowRight size={20} />} />
      </div>
    </div>
  );
}

export default HomePage;
