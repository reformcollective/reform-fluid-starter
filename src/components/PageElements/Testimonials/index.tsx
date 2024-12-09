"use client";
import Dot from "@/svgs/Dot";
import Star from "@/svgs/Star";
import arrowLeft from "@/svgs/arrow-left.svg";
import arrowRight from "@/svgs/arrow-right.svg";
import Image from "next/image";

type TestimonialProps = {
  rating: number;
  content: string;
  author: {
    name: string;
    position: string;
    company: string;
  };
};

const testimonials: TestimonialProps[] = [
  {
    rating: 5,
    content:
      "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
    author: {
      name: "Customer Name",
      position: "Position",
      company: "Company name",
    },
  },
  {
    rating: 5,
    content:
      "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
    author: {
      name: "Customer Name",
      position: "Position",
      company: "Company name",
    },
  },
  {
    rating: 5,
    content:
      "A customer testimonial that highlights features and answers potential customer doubts about your product or service. Showcase testimonials from a similar demographic to your customers.",
    author: {
      name: "Customer Name",
      position: "Position",
      company: "Company name",
    },
  },
];

const TestimonialCard = ({ rating, content, author }: TestimonialProps) => (
  <div className="border border-black p-8">
    <div className="flex gap-1 mb-8">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={20} />
      ))}
    </div>

    <p className="text-base mb-8">&quot;{content}&quot;</p>

    <div className="flex items-center gap-4">
      <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0"></div>
      <div className="text-left">
        <h3 className="font-bold">{author.name}</h3>
        <p>
          {author.position}, {author.company}
        </p>
      </div>
    </div>
  </div>
);

const NavigationButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => (
  <button
    className={`hidden md:flex absolute ${
      direction === "left" ? "-left-6" : "-right-6"
    } top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center border border-black rounded-full bg-white cursor-pointer z-10`}
    aria-label={direction === "left" ? "Previous" : "Next"}
    onClick={onClick}
  >
    <Image
      alt={direction === "left" ? "arrow-left" : "arrow-right"}
      height={16}
      width={16}
      src={direction === "left" ? arrowLeft : arrowRight}
      className="w-4 h-4"
    />
  </button>
);

const Testimonials = () => {
  const handlePrevious = () => {
    // Add slider logic
  };

  const handleNext = () => {
    // Add slider logic
  };

  return (
    <section className="container py-12 md:py-20">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Customer testimonials
          <br />
          [more social proof]
        </h2>
        <p className="text-lg mb-8 md:mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Testimonials Slider */}
      <div className="relative">
        <NavigationButton direction="left" onClick={handlePrevious} />

        {/* Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={index > 0 ? "hidden xl:block" : ""}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <NavigationButton direction="right" onClick={handleNext} />
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {[...Array(5)].map((_, index) => (
          <Dot
            key={index}
            size={8}
            color={index === 0 ? "#000000" : "#CCCCCC"}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
