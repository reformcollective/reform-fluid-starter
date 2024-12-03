const TrustedBy = () => {
  return (
    <div className="bg-white py-[80px]">
      <div className="text-center container mx-auto px-[64px]">
        <div className="mb-[24px] text-[18px] font-bold leading-[27px] text-black">
          Trusted by the world&apos;s best companies [social proof to build
          credibility]
        </div>

        <div className="flex flex-wrap justify-evenly items-center gap-[32px]">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <img
                key={index}
                src="/images/logo.png"
                alt="Company logo"
                width={150}
                height={60}
                className="object-contain"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
