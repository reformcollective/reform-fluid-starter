import Image from "next/image";

const Logos = () => {
  return (
    <div className="text-center py-3">
      <div className="mb-2">
        Trusted by the world's best companies [social proof to build
        credibility]
      </div>
      <div className="inline-flex gap-3">
        <Image
          src="/public/images/logo.png"
          alt="impressive logo here"
          width={200}
          height={100}
        />
        <Image
          src="/public/images/logo.png"
          alt="impressive logo here"
          width={200}
          height={100}
        />
        <Image
          src="/public/images/logo.png"
          alt="impressive logo here"
          width={200}
          height={100}
        />
        <Image
          src="/public/images/logo.png"
          alt="impressive logo here"
          width={200}
          height={100}
        />
        <Image
          src="/public/images/logo.png"
          alt="impressive logo here"
          width={200}
          height={100}
        />
        <Image
          src="/public/images/logo.png"
          alt="impressive logo here"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
};

export default Logos;
