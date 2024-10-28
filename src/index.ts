import { ADEFetcher } from "./utils/fetcher";
import type { Credentials } from "./models/auth";
import { Project, Projects } from "./models/timetable";
import { getProjects, setProject } from "./services/projectService";

export class ADEPlanningAPI {
    private fetcher: ADEFetcher;

    /** 
     * Initializes a new instance of the ADEPlanningAPI class.
     * @param baseUrl The base URL of the ADE instance.
     * @returns A new instance of the ADEPlanningAPI class.
    */
    constructor(baseUrl: string) {
        this.fetcher = new ADEFetcher(baseUrl);
    }

    /** 
     * Initializes a new session with the API.
     * @param credentials The credentials to use for authentication.
     * @returns A promise that resolves when the session is initialized.
    */
    async initializeSession(credentials: Credentials): Promise<void> {
        return await this.fetcher.initializeSession(credentials);
    }

    /**
     * Terminates the current session with the API.
     * @returns A promise that resolves when the session is terminated.
     */
    async terminateSession(): Promise<void> {
        return await this.fetcher.terminateSession();
    }

    /**
     * Gets the list of projects.
     * @returns A promise that resolves with the list of projects.
     */
    async getProjects(): Promise<Projects> {
        return await getProjects(this.fetcher);
    }

    /**
     * Sets the current project.
     * @param project The project to set as current.
     * @returns A promise that resolves when the project is set.
     */
    async setProject(project: Project): Promise<void> {
        return await setProject(this.fetcher, project);
    }
}