"use client";

const Logos = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-8 py-8 md:py-12">
        <h2 className="text-center text-base md:text-lg font-bold mb-8">
          Trusted by the world&apos;s best companies [social proof to build
          credibility]
        </h2>

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
                className="h-6 md:h-8 w-24 md:w-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;
