import { Genre } from "@/types/data";
import requests from "@/utils/http"


export const getAllGenres = async (): Promise<Genre []> => {
    try {
        const res = await requests.get('/genre/getall');
        return (res as { data: Genre[] }).data;
    } catch (error) {
        console.error('Error fetching genres:', error);
        throw error; 
    }
}