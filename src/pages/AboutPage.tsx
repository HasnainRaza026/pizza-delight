function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />
      <BeginningSection />
      <MissionSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative bg-[var(--color-font-black)] text-white">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581873372796-635b67ca2008?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.4)",
        }}
      ></div>

      <div className="container !mx-auto !px-4 !py-24 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold !mb-4 !text-white">
          Our Story
        </h1>
        <div className="w-20 h-1 bg-[var(--color-red)] !mx-auto !mb-6"></div>
        <p className="text-xl max-w-2xl !mx-auto">
          From a small family pizzeria to a beloved local favorite, discover the
          passion behind every pizza we make.
        </p>
      </div>
    </div>
  );
}

function BeginningSection() {
  return (
    <section className="!py-16">
      <div className="container !mx-auto !px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold !mb-4">Our Beginning</h2>
            <div className="w-16 h-1 bg-[var(--color-red)] !mb-6"></div>
            <p className="text-gray-600 !mb-4">
              Pizza Delight was founded in 1998 by the Rossi family, who brought
              their secret recipes all the way from Naples, Italy. What started
              as a small family restaurant with just four tables has grown into
              a beloved establishment known for authentic flavors and quality
              ingredients.
            </p>
            <p className="text-gray-600">
              Antonio Rossi, our founder, learned the art of pizza-making from
              his grandfather in Naples. He was determined to bring those
              traditional techniques and flavors to a new audience, while
              maintaining the authentic methods that make Italian pizza so
              special.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
              alt="Pizza Delight Beginning"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-5 -right-5 bg-white !p-4 rounded shadow-lg">
              <p className="text-pizza-red font-bold">Est. 1998</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="!py-16 bg-white">
      <div className="container !mx-auto !px-4 text-center">
        <h2 className="text-3xl font-bold !mb-4">Our Mission</h2>
        <div className="w-16 h-1 bg-[var(--color-red)] !mx-auto !mb-6"></div>
        <p className="text-gray-600 max-w-3xl !mx-auto text-lg">
          At Pizza Delight, our mission is simple: to create exceptional pizzas
          using the freshest ingredients and traditional methods, served with
          love and care to our community. We believe that good food brings
          people together, and we're proud to be a part of your special moments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 !mt-12">
          <div className="bg-gray-50 !p-6 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-[var(--color-red)]/10 rounded-full flex items-center justify-center !mx-auto !mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3348/3348103.png"
                alt="Quality"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold !mb-2">Quality Ingredients</h3>
            <p className="text-gray-600">
              We source only the freshest, highest-quality ingredients for our
              pizzas, from our imported Italian flour to local produce.
            </p>
          </div>

          <div className="bg-gray-50 !p-6 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-[var(--color-red)]/10 rounded-full flex items-center justify-center !mx-auto !mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1830/1830839.png"
                alt="Tradition"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold !mb-2">Traditional Methods</h3>
            <p className="text-gray-600">
              Our dough is made fresh daily and left to rise for at least 24
              hours, creating the perfect texture and flavor in every bite.
            </p>
          </div>

          <div className="bg-gray-50 !p-6 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-[var(--color-red)]/10 rounded-full flex items-center justify-center !mx-auto !mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1534/1534938.png"
                alt="Community"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold !mb-2">Community Focus</h3>
            <p className="text-gray-600">
              We're proud to be a part of this community. We support local
              events, schools, and organizations whenever possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
