import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import styled from "styled-components";
import PizzaMenuCard from "../layout/PizzaMenuCard";

const SectionHeading = styled.h2`
  font-family: var(--font-heading);
  color: var(--color-font-black);
  font-size: 1.875rem; // 30px
  font-weight: 700;
  text-align: center;
  position: relative;
  padding-bottom: 16px;
  margin-bottom: 30px;

  &::before {
    content: "";
    position: absolute;
    height: 5px;
    width: 100px;
    background-color: red;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white text-center md:text-start">
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
                <span className="text-[var(--color-red)]">Pizzas</span>{" "}
                Delivered To{" "}
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
      </section>

      {/* Menu Section */}
      <section className="!mt-14">
        <SectionHeading>Checkout Our Menu</SectionHeading>
        <div className="!mx-auto max-w-[298px] md:max-w-[616px] lg:max-w-[934px]">
          <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
            <PizzaMenuCard />
            <PizzaMenuCard />
            <PizzaMenuCard />
            <PizzaMenuCard />
            {/* Only shown on large screens */}
            <div className="hidden lg:block">
              <PizzaMenuCard />
            </div>
            <div className="hidden lg:block">
              <PizzaMenuCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
