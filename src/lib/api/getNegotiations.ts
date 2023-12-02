import { Negotitaion } from "@/types/data";
import requests from "@/utils/http";

export default async function getNegotiations(acquisitionId: string) {
  try {
    const { data: negotiations } = await requests.get<Negotitaion[]>(
      `/acquisition/${acquisitionId}/negotiations`
    );
    return negotiations;
  } catch (e) {
    console.log(e);
  }
}
