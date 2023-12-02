import { Person, Project } from "@/types/data";
import requests from "@/utils/http";

export const getAllCrew = async (keyword: string): Promise<Person[]> => {
  try {
    const res = await requests.get(`/users/user/crew-member/getall?userType=${keyword}`);
    return (res as { data: Person[] }).data;

  } catch (error) {
    console.error('Error fetching crew:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

// export const getCrewbyCrewId = async (status: "ongoing" | "all", id: string): Promise<Project[]> => {
//   try {
//     const res = await requests.get(`/project/${status === "ongoing" ? "available/" : ""}${id}/getall`);
//     return (res as { data: Project[] }).data;
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     throw error; // Re-throw the error to be handled by the caller
//   }
// };
