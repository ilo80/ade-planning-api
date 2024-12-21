// Interface for a single project
export interface Project {
    id: number;
    name: string;
    uid: number;
}

// Interface for a list of projects
export type Projects = Project[];