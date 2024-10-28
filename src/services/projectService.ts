import { Projects, Project } from "../models/timetable";
import { ADEFetcher } from "../utils/fetcher";

export async function getProjects(fetcher: ADEFetcher): Promise<Projects> {
    const data = await fetcher.get({ function: "getProjects", detail: 2 }) as { projects: {project: any[]} }; // Fetch the projects data 

    // Convert the data to the Projects interface
    const projects: Projects = {
        projects: data.projects.project.map(item => {
            if (!item.$.id || !item.$.name || !item.$.uid) { // Check if the data is valid
                throw new Error("Invalid project data");
            }

            return {
                id: parseInt(item.$.id, 10),
                name: item.$.name,
                uid: parseInt(item.$.uid, 10),
            } as Project;
        })
    }

    return projects;
}
