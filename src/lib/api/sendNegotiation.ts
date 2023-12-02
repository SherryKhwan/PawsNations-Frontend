import { Negotitaion } from "@/types/data";
import requests from "@/utils/http";

type SendNegotiation =
  | Omit<Negotitaion, "_id" | "acquisition">
  | {
      project: string;
      from: string;
      to: string;
    };

export default async function sendNegotiation(negotiation: SendNegotiation) {
  try {
    const res = await requests.post<Negotitaion>(
      "/acquisition/create",
      negotiation
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
