"use client";

const Logos = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        {/* Section Title */}
        <h2 className="text-center text-base md:text-lg font-bold mb-8">
          Trusted by the world&apos;s best companies [social proof to build
          credibility]
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={`logo-${index}`}
              className={`flex items-center justify-center ${
                index > 4 ? "md:hidden" : ""
              }`}
            >
              <img
                src="/images/logo.png"
                alt="Company logo"
                className="h-8 md:h-10 lg:h-12 w-32 md:w-40 lg:w-48 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;
