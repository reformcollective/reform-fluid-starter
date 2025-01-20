import { safeZodParse } from "@/api";
import client from "@/api/client";
import { type Company, companySchema } from "@/types/company";

async function getCompany(): Promise<Company> {
  const { body } = await client(`companies/me`);

  return safeZodParse(body.data.company, companySchema);
}

export default getCompany;
