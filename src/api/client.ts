const FluidApiClient = async (
  url: string,
  isCompanyAPI = true,
  options?: RequestInit
) => {
  const baseUrl = isCompanyAPI
    ? `${process.env.FLUID_BASE_URL}/api/company/v1/`
    : `${process.env.FLUID_BASE_URL}/api/v1/`;
  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${process.env.FLUID_API_TOKEN}`,
    },
  });

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
