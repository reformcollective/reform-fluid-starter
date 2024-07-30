import Dot from "@/svgs/Dot";
import Star from "@/svgs/Star";
import {
  faArrowLeft,
  faArrowRight,
} from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {
  return (
    <div className="mx-20 my-28 text-center">
      <h1 className="text-center text-5xl font-bold w-1/2 mx-auto mb-6">
        Customer testimonials [more social proof]
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="w-full mt-10 relative">
        <div className="border border-black rounded-full bg-white px-4 py-3 absolute z-10 -ml-6 top-1/3 translate-y-1/2 left-0">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="inline-flex">
          <div className="w-1/3 pr-4">
            <div className="flex flex-col gap-8 border border-black p-8">
              <div className="inline-flex gap-1">
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
              </div>
              <p>
                &quot;A customer testimonial that highlights features and
                answers potential customer doubts about your product or service.
                Showcase testimonials from a similar demographic to your
                customers.&quot;
              </p>
              <div className="inline-flex">
                <div className="rounded-full overflow-hidden mr-4">
                  <img src="https://placehold.co/56x56/2F4F4F/black@3x.png" />
                </div>
                <div className="text-start">
                  <h2 className="font-bold text-lg">Customer Name</h2>
                  <p>Position, Company name</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-40 w-1/3 pr-4 pl-4">
            <div className="flex flex-col gap-8 border border-black p-8">
              <div className="inline-flex gap-1">
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
              </div>
              <p>
                &quot;A customer testimonial that highlights features and
                answers potential customer doubts about your product or service.
                Showcase testimonials from a similar demographic to your
                customers.&quot;
              </p>
              <div className="inline-flex">
                <div className="rounded-full overflow-hidden mr-4">
                  <img src="https://placehold.co/56x56/2F4F4F/black@3x.png" />
                </div>
                <div className="text-start">
                  <h2 className="font-bold text-lg">Customer Name</h2>
                  <p>Position, Company name</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-40 w-1/3 pl-4">
            <div className="flex flex-col gap-8 border border-black p-8">
              <div className="inline-flex gap-1">
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
                <Star size={20} />
              </div>
              <p>
                &quot;A customer testimonial that highlights features and
                answers potential customer doubts about your product or service.
                Showcase testimonials from a similar demographic to your
                customers.&quot;
              </p>
              <div className="inline-flex">
                <div className="rounded-full overflow-hidden mr-4">
                  <img src="https://placehold.co/56x56/2F4F4F/black@3x.png" />
                </div>
                <div className="text-start">
                  <h2 className="font-bold text-lg">Customer Name</h2>
                  <p>Position, Company name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-black rounded-full bg-white px-4 py-3 absolute z-10 -mr-6 top-1/3 translate-y-1/2 right-0">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="text-center inline-flex gap-x-2 mt-8">
        <Dot size={8} color="black" />
        <Dot size={8} color="#CCCCCC" />
        <Dot size={8} color="#CCCCCC" />
        <Dot size={8} color="#CCCCCC" />
        <Dot size={8} color="#CCCCCC" />
      </div>
    </div>
  );
};

export default Testimonials;
