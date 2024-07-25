const FluidApiClient = (url: string, options?: RequestInit) => {
  return fetch(`${process.env.FLUID_BASE_URL}${url}`, {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.FLUID_API_KEY}`,
    },
  });
};

export default FluidApiClient;
