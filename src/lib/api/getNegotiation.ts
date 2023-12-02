import { Negotitaion } from "@/types/data";
import requests from "@/utils/http";

export default async function getNegotiation(negotiationId: string) {
  try {
    const { data: negotiation } = await requests.get<Negotitaion>(
      `/acquisition/${negotiationId}/get-negotiation`
    );
    return negotiation;
  } catch (e) {
    console.log(e);
  }
}
