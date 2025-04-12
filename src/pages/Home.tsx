import { ArrowRight, Pizza, Soup, Truck } from "lucide-react";
import Button from "../ui/Button";
import styled from "styled-components";
import PizzaMenuCard from "../ui/layout/PizzaMenuCard";
import DeliveryCard from "../ui/layout/DeliveryCard";

const SectionHeading = styled.h2`
  font-family: var(--font-heading);
  color: var(--color-font-black);
  font-size: 1.875rem; // 30px
  font-weight: 700;
  text-align: center;
  position: relative;
  padding-bottom: 16px;

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
    font-size: 2.25rem; // 36px
  }
`;

const SectionDescription = styled.p`
  font-family: var(--font-body);
  font-weight: 500;
  color: var(--color-font-black);
  opacity: 0.8;
  text-align: center;
  width: 228px;
  margin-top: 24px;
  margin-inline: auto;

  @media (min-width: 640px) {
    font-size: 18px;
    width: 420px;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

function HomePage() {
  return (
    <>
      <HeroSection />
      <MenuSection />
      <DeliverySection />
    </>
  );
}

function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative text-white text-center md:text-start"
    >
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
        <Button>
          Order Now
          <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section
      id="menu-section"
      className="!py-20 flex flex-col items-center gap-7 bg-[var(--color-red)]/4"
    >
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
      <Button>View Full Menu</Button>
    </section>
  );
}

function DeliverySection() {
  return (
    <section
      id="delivery-section"
      className="!py-20 flex flex-col items-center gap-12"
    >
      <div>
        <SectionHeading>
          Delivered in{" "}
          <span className="font-(family-name:--font-default) md:text-[34px]">
            30
          </span>{" "}
          <span className="inline-block sm:hidden">mins</span>
          <span className="hidden sm:inline-block">minutes</span>
        </SectionHeading>
        <SectionDescription>
          You can order your food by following a simple three steps process
        </SectionDescription>
      </div>
      <div className="flex flex-col gap-7 md:flex-row">
        <DeliveryCard
          icon={<Soup strokeWidth={1.5} size={80} />}
          title="Order Your Food"
          description="Order the food by just adding it to the cart and placing the order, our professional chefs will start preparing your food right away"
        />
        <DeliveryCard
          icon={<Truck strokeWidth={1.5} size={80} />}
          title={"Delivery and Pickup"}
          description="Our riders will deliver your food with in 30 minutes or you can also pickup your order from our restaurant"
        />
        <DeliveryCard
          icon={<Pizza strokeWidth={1.5} size={80} />}
          title="Enjoy Your Food"
          description="Enjoy the best quality Pizza, hand-crafted with premium ingredients. Bringing to you the authentic taste of Italy"
        />
      </div>
    </section>
  );
}

export default HomePage;
