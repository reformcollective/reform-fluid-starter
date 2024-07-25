import Button from "@/components/Button";

const CallToAction = () => {
  return (
    <div className="flex gap-6 flex-col text-center bg-gray-200 py-28 px-20">
      <h1 className="text-4xl font-bold w-1/3 m-auto">
        Call to action that excites the visitor to try your product
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="inline-flex gap-4 mx-auto">
        <Button>Get Started</Button>
        <Button variant="transparent-dark">Chat with Sales</Button>
      </div>
    </div>
  );
};

export default CallToAction;
