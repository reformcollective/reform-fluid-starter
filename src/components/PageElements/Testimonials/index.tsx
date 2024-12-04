"use client";
import Dot from "@/svgs/Dot";
import Star from "@/svgs/Star";
import {
  faArrowLeft,
  faArrowRight,
} from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {
  return (
    <div className="container py-20">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-[40px] md:text-[48px] font-bold mb-4">
          Customer testimonials
          <br />
          [more social proof]
        </h1>
        <p className="text-lg mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Testimonials Slider */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center border border-black rounded-full bg-white cursor-pointer z-10"
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`border border-black p-8 ${
                index > 0 ? "hidden md:block" : ""
              }`}
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} />
                ))}
              </div>

              <p className="text-base mb-8">
                &quot;A customer testimonial that highlights features and
                answers potential customer doubts about your product or service.
                Showcase testimonials from a similar demographic to your
                customers.&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div className="text-left">
                  <h3 className="font-bold">Customer Name</h3>
                  <p>Position, Company name</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center border border-black rounded-full bg-white cursor-pointer z-10"
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
        </button>
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
    </div>
  );
};

export default Testimonials;
