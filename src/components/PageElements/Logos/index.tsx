import Image from "next/image";

const Logos = () => {
  return (
    <div className="text-center py-20 px-15">
      <div className="mb-8 font-bold">
        Trusted by the world&aposs best companies [social proof to build
        credibility]
      </div>
      <div className="inline-flex justify-around w-full">
        <Image
          src="/images/logo.png"
          alt="impressive logo here"
          width={150}
          height={60}
        />
        <Image
          src="/images/logo.png"
          alt="impressive logo here"
          width={150}
          height={60}
        />
        <Image
          src="/images/logo.png"
          alt="impressive logo here"
          width={150}
          height={60}
        />
        <Image
          src="/images/logo.png"
          alt="impressive logo here"
          width={150}
          height={60}
        />
        <Image
          src="/images/logo.png"
          alt="impressive logo here"
          width={150}
          height={60}
        />
        <Image
          src="/images/logo.png"
          alt="impressive logo here"
          width={150}
          height={60}
        />
      </div>
    </div>
  );
};

export default Logos;
