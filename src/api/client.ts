const FluidApiClient = (url: string, options?: RequestInit) =>
  fetch(`${process.env.FLUID_BASE_URL}${url}`, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${process.env.FLUID_API_TOKEN}`,
    },
  }).then(async (response) => {
    const body = await response.json();
    return {
      ...response,
      body,
    };
  });

export default FluidApiClient;
