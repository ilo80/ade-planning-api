import { Project } from "../models/timetable";
import { ADEFetcher } from "../utils/fetcher";

/**
 * Get the projects list
 * @param fetcher ADEFetcher instance
 * @returns A list of projects (Project[])
 */
export async function getProjects(fetcher: ADEFetcher): Promise<Project[]> {
    const data = await fetcher.get({ function: "getProjects", detail: 2 }) as { projects: {project: any[]} }; // Fetch the projects data 

    // Convert the data to the Projects interface
    return data.projects.project.map(item => {
        if (!item.$.id || !item.$.name || !item.$.uid) { // Check if the data is valid
            throw new Error("Invalid project data");
        }

        return {
            id: parseInt(item.$.id, 10),
            name: item.$.name,
            uid: parseInt(item.$.uid, 10),
        } as Project;
    });
}

/** 
 * Set the project
 * @param fetcher ADEFetcher instance
 * @param project The project to set
 * @returns void
*/
export async function setProject(fetcher: ADEFetcher, project: Project): Promise<void> {
    await fetcher.get({ function: "setProject", projectId: project.id }); // Set the project
}
