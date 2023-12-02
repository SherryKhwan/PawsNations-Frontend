import { Acquisition } from "@/types/data";
import requests from "@/utils/http";

export default async function getAcquisition(projectId: string) {
  try {
    const { data: acquisition } = await requests.get<Acquisition>(
      `/acquisition/${projectId}/get-acquisition`
    );
    return acquisition;
  } catch (e) {
    console.log(e);
  }
}
