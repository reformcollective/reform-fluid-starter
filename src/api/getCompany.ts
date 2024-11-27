import client from "@/api/client";
import { companySchema } from "@/types/company";

async function getCompany() {
  const { body } = await client(`companies/me`);

  return companySchema.parse(body.data.company);
}

export default getCompany;
