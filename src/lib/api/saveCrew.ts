import { Crew, Person } from "@/types/data";
import requests from "@/utils/http";

export default async function saveCrew(crew: Crew){
    try {
        // const projects: Project = {
        //     title: project.title,
        //     genres: project.genre.split(','),
        //     cast: project.cast.split(','),
        //     synopsis: project.synopsis,
        //     // writers: [],
        //     writers: project.writers.split(','),
        //     directors: project.director.split(','),
        //     // directors: [],
        //     quality: project.colorQuality,
        //     creator: user._id,
        //     languages: project.language.split(','),
        //     // description: "some desc",
        // };        
        console.log(crew);
        
        const res = await requests.post(`/users/user/crew-member/create`, crew)
    } catch (error) {
        console.error(error);
    }
}