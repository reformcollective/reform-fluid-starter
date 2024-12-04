"use client";

type LogoItem = {
  src: string;
  alt: string;
};

const logos: LogoItem[] = [
  { src: "/images/logo.png", alt: "Company logo 1" },
  { src: "/images/logo.png", alt: "Company logo 2" },
  { src: "/images/logo.png", alt: "Company logo 3" },
  { src: "/images/logo.png", alt: "Company logo 4" },
  { src: "/images/logo.png", alt: "Company logo 5" },
  { src: "/images/logo.png", alt: "Company logo 6" },
];

const Logos = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        {/* Section Title */}
        <h2 className="text-center text-base md:text-lg font-bold mb-8">
          Trusted by the world&apos;s best companies [social proof to build
          credibility]
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {logos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className={`flex items-center justify-center ${
                index > 4 ? "md:hidden" : ""
              }`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-10 lg:h-12 w-32 md:w-40 lg:w-[192px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
