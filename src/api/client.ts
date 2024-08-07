const FluidApiClient = async (url: string, options?: RequestInit) => {
  const response = await fetch(`${process.env.FLUID_BASE_URL}${url}`, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${process.env.FLUID_API_TOKEN}`,
    },
  });

  // instead of having to async get the body from every client call, we can just do it here
  const body = await response.json();
  return {
    ...response,
    body,
  };
};

export default FluidApiClient;
