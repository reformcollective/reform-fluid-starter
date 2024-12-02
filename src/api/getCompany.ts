import { safeZodParse } from "@/api";
import client from "@/api/client";
import { companySchema } from "@/types/company";

async function getCompany() {
  const { body } = await client(`companies/me`);

  return safeZodParse(body.data.company, companySchema);
}

export default getCompany;
