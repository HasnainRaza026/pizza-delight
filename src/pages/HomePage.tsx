import { ArrowLeft, ArrowRight, Pizza, Soup, Truck } from "lucide-react";
import Button from "../ui/Button";
import styled from "styled-components";
import PizzaMenuCard from "../ui/layout/PizzaMenuCard";
import DeliveryCard from "../ui/layout/DeliveryCard";
import TestimonialCard from "../ui/layout/TestimonialCard";
import { useState } from "react";
import { testimonials } from "../data/testimonials";
import { PizzaData } from "../types/PizzaDataType";
import PageLoader from "../ui/layout/PageLoader";
import { useFetchMenu } from "../hooks/useFetchMenu";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { updateActivePizzaDetail } from "../features/menu/menuSlice";
import herImg from "../assets/img-hero.jpg";

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

const TestimonialButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-red);
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-red);
  transition: all 150ms ease;

  &:hover {
    background-color: var(--color-red);
    color: white;
  }
`;

function HomePage() {
  return (
    <>
      <HeroSection />
      <MenuSection />
      <DeliverySection />
      <TestimonialSection />
    </>
  );
}

function HeroSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { menu } = useFetchMenu();

  const handleOrderNow = (screen: string) => {
    dispatch(
      updateActivePizzaDetail({
        ...menu[0],
        size: "",
        toppings: [],
        quantity: 1,
      })
    );
    if (screen === "mobile") navigate("/menu");
    else if (screen === "notMobile") navigate("/menu/1");
  };

  return (
    <section
      id="hero-section"
      className="relative text-white text-center md:text-start"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('${herImg}')`,
          filter: "brightness(0.4)",
        }}
      ></div>
      <div className="relative flex flex-col gap-12 justify-center items-center !px-7 !py-32 md:items-start">
        <div className="flex flex-col gap-6">
          <h1 className="!text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
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
        {/* For Mobile */}
        <div className="sm:hidden">
          <Button onClick={() => handleOrderNow("mobile")}>
            Order Now
            <ArrowRight size={20} />
          </Button>
        </div>
        {/* For Large Sreens */}
        <div className="hidden sm:flex">
          <Button onClick={() => handleOrderNow("notMobile")}>
            Order Now
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const { menu, error, isPending } = useFetchMenu();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isPending) return <PageLoader />;
  if (error) return <h1>Error...!</h1>;

  return (
    <section
      id="menu-section"
      className="!py-20 flex flex-col items-center gap-7 bg-[var(--color-red)]/4"
    >
      <SectionHeading>Checkout Our Menu</SectionHeading>
      <div className="!mx-auto max-w-[298px] md:max-w-[616px] lg:max-w-[934px]">
        <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {menu.map((pizza: PizzaData, i: number) =>
            i < 4 ? (
              <PizzaMenuCard key={pizza.id} pizza={pizza} placedOn="home" />
            ) : i > 3 && i < 6 ? (
              <div key={pizza.id} className="hidden lg:block">
                {/* Only shown on large screens */}
                <PizzaMenuCard pizza={pizza} placedOn="home" />
              </div>
            ) : null
          )}
        </div>
      </div>
      {/* For Mobile */}
      <div className="block sm:hidden">
        <Button onClick={() => navigate("/menu")}>View Full Menu</Button>
      </div>

      {/* For Large Screens */}
      <div className="hidden sm:block">
        <Button
          className="hidden sm:block"
          onClick={() => {
            dispatch(
              updateActivePizzaDetail({
                ...menu[0],
                size: "",
                toppings: [],
                quantity: 1,
              })
            );
            navigate("/menu/1");
          }}
        >
          View Full Menu
        </Button>
      </div>
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

function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section
      id="delivery-section"
      className="!py-20 flex flex-col items-center gap-12 bg-[var(--color-red)]/4"
    >
      <div>
        <SectionHeading>
          <span className="hidden sm:inline-block">Customer's</span>{" "}
          Testimonials
        </SectionHeading>
        <SectionDescription>
          Don't just take our word for it. Here's what pizza lovers have to say
          about Pizza Delight.
        </SectionDescription>
      </div>
      <div>
        <div className="flex gap-12 justify-center items-center">
          <TestimonialButton onClick={handlePrev} className="!hidden md:!flex">
            <ArrowLeft strokeWidth={1} size={18} />
          </TestimonialButton>
          <TestimonialCard index={activeIndex} />
          <TestimonialButton onClick={handleNext} className="!hidden md:!flex">
            <ArrowRight strokeWidth={1} size={18} />
          </TestimonialButton>
        </div>
        <div className="flex gap-6 justify-center !mt-10 md:hidden">
          <TestimonialButton onClick={handlePrev}>
            <ArrowLeft strokeWidth={1} size={18} />
          </TestimonialButton>
          <TestimonialButton onClick={handleNext}>
            <ArrowRight strokeWidth={1} size={18} />
          </TestimonialButton>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
