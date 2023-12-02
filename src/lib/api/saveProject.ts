import { Project, User } from "@/types/data";
import requests from "@/utils/http";
import getUser from "./getUser";


export default async function saveProject(project){
    console.log(project);
    
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        
        const projects = {
            title: project.title,
            genres: project.genre,
            budget: project.budget,
            camera: project.camera,
            releaseDate: project.releaseDate,
            runtime: project.runtime,
            cast: project.cast,
            synopsis: project.synopsis,
            writers: project.writers,
            directors: project.director,
            colorQuality: project.colorQuality,
            creator: user._id,
            languages: project.language.split(','),
            description: "some desc",
        };
        // console.log(projects);
        
        const res = await requests.post(`/project/create`, projects)
        alert("Success")
    } catch (error) {
        console.error(error);
    }
}