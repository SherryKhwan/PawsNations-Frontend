import { Acquisition } from "@/types/data";
import requests from "@/utils/http";

export default async function getAcquisitions({
  projectId,
  scoutId,
}: {
  projectId?: string;
  scoutId?: string;
}): Promise<Acquisition[]> {
  try {
    let url = "/acquisition/acquisitions/filters?";
    if (projectId) {
      url += `?type=project&id=${projectId}`;
    } else if (scoutId) {
    }
    if (projectId) {
      const acquisitions = await requests.get<Acquisition[]>(url);
      return acquisitions.data;
    }
  } catch (e) {
    console.log(e);
    return [];
  }
}
