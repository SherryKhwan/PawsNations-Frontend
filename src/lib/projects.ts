import { Project } from "@/types/data";
import requests from "@/utils/http";

export const getAllProjects = async (pageNumber: number, query: string): Promise<{ noOfPages: number, projects: Project[] }> => {
  try {
    const res = await requests.get(`/project/search/pagination?pageSize=3&pageNumber=${pageNumber}&queryText=${query}`);
    return (res as { data: { noOfPages: number, projects: Project[] } }).data;

  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export const getProjectsByFilmmakerID = async (ongoing: boolean, id: string, pageNumber: number, query: string): Promise<{ noOfPages: number, projects: Project[] }> => {
  try {
    const res = await requests.get(`/project/search/pagination?pageSize=3&pageNumber=${pageNumber}&queryText=${query}&filmmaker=${id}&status=${ongoing ? "active" : ""}`);
    return (res as { data: { noOfPages: number, projects: Project[] } }).data;
    // const res = await requests.get(`/project/${status === "ongoing" ? "available/" : ""}${id}/getall`);
    // return (res as { data: Project[] }).data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};