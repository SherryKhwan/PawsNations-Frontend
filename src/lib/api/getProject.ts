import { Project } from "@/types/data";
import requests from "@/utils/http";

export default async function getProjectById(id: string): Promise<Project>  {
  const res = await requests.get(`/project/${id}`);
  return (res as { data: any }).data;
};

