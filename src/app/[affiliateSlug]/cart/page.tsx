"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { faTrash } from "@awesome.me/kit-ac6c036e20/icons/classic/regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
  const { affiliateSlug } = useParams();

  return (
    <div className="px-20 py-28 flex flex-col gap-y-20">
      <div className="inline-flex justify-between w-full">
        <div className="text-5xl font-bold">Your Cart (1)</div>
        <Link className="mt-4" href={`/${affiliateSlug}/shop`}>
          Keep Shopping
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="inline-flex pb-4 px-4 border-b border-black">
          <div className="flex-grow-[4]">product</div>
          <div className="flex-grow">quantity</div>
          <div className="flex-shrink text-end">total</div>
        </div>
        <div className="inline-flex py-4 px-4 border-b border-black">
          <div className="flex-grow-[4] inline-flex">
            <Image
              src={`https://placehold.co/${145}x${128}/2F4F4F/black@3x.png`}
              alt="placeholder image"
              height={128}
              width={145}
            />
            <div className="flex flex-col ml-4 pt-8 gap-y-1">
              <div className="font-semibold">Product Name</div>
              <div className="text-sm">Variant</div>
            </div>
          </div>
          <div className="flex-grow inline-flex justify-end">
            <div className="inline-flex gap-2 pt-10 mx-10">
              <Button
                variant="transparent-dark"
                className="pl-4 pt-1.5 w-10 h-10"
              >
                -
              </Button>
              <Input
                className="w-24 text-center h-10"
                type="number"
                defaultValue={1}
              />
              <Button
                variant="transparent-dark"
                className="pl-4 pt-1.5 h-10 w-10"
              >
                +
              </Button>
              <FontAwesomeIcon className="ml-2 pt-2.5" icon={faTrash} />
            </div>
          </div>
          <div className="flex-shrink text-end pt-12">$30.00 (USD)</div>
        </div>
        <div className="inline-flex py-4 px-4 border-b border-black">
          <div className="flex-grow-[4] inline-flex">
            <Image
              src={`https://placehold.co/${145}x${128}/2F4F4F/black@3x.png`}
              alt="placeholder image"
              height={128}
              width={145}
            />
            <div className="flex flex-col ml-4 pt-8 gap-y-1">
              <div className="font-semibold">Product Name</div>
              <div className="text-sm">Variant</div>
            </div>
          </div>
          <div className="flex-grow inline-flex justify-end">
            <div className="inline-flex gap-2 pt-10 mx-10">
              <Button
                variant="transparent-dark"
                className="pl-4 pt-1.5 w-10 h-10"
              >
                -
              </Button>
              <Input
                className="w-24 text-center h-10"
                type="number"
                defaultValue={1}
              />
              <Button
                variant="transparent-dark"
                className="pl-4 pt-1.5 h-10 w-10"
              >
                +
              </Button>
              <FontAwesomeIcon className="ml-2 pt-2.5" icon={faTrash} />
            </div>
          </div>
          <div className="flex-shrink text-end pt-12">$30.00 (USD)</div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="flex flex-col justify-end text-end gap-4 w-full max-w-[450px]">
          <div className="font-bold text-2xl">Subtotal: $60.00 (USD)</div>
          <div>Taxes and shipping calculated at checkout</div>
          <Button className="w-full mt-2" variant="primary">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
