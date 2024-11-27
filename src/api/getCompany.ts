import client from "@/api/client";
import { companySchema } from "@/types/company";

async function getCompany() {
  const result = await client(`companies/me`);
  return companySchema.parse(result.body.data.company);
}

export default getCompany;
