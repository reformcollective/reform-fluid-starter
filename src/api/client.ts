const FluidApiClient = async (url: string, options?: RequestInit) => {
  const response = await fetch(
    `${process.env.FLUID_BASE_URL || "http://fluid.app"}/api/company/v1/${url}`,
    {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${process.env.FLUID_API_TOKEN}`,
      },
    }
  );

  // instead of having to async get the body from every client call, we can just do it here
  return {
    ...response,
    body: await (response.headers
      .get("content-type")
      ?.includes("application/json")
      ? response.json()
      : response.text()),
  };
};

export default FluidApiClient;
