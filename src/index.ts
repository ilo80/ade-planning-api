import { ADEFetcher } from "./utils/fetcher";
import { Credentials } from "./models/auth";
import { Project, Event, Event1, Event2, Event3, Event4, Event5, Event6, Event7, Event8, Memberships, AllMembers, Counters, Constraints, Cost, Activities, Activity, Rights, Resource, Resource1, Resource2, Resource3, Resource4, Resource5, Resource6, Resource7, Resource8, Resource9, Resource10, Resource11, Resource12, Resource13 } from "./models/timetable";
import { getProjects, setProject } from "./services/projectService";
import { getEvents } from "./services/eventService";
import { getResources } from "./services/resourceService";

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
    async getProjects(): Promise<Project[]> {
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

    /**
     * Gets the list of events.
     * @param params The parameters to pass to the API.
     * @returns A promise that resolves with the list of events.
     */
    async getEvents(params: any): Promise<Event[]> {
        return await getEvents(this.fetcher, params);
    }
    
    /**
     * @param params The parameters to pass to the API.
     * @returns A promise that resolves with the list of resources.
     */
    async getResources(params: any): Promise<Resource[]> {
        return await getResources(this.fetcher, params);
    }
}

export type { Project, Event, Event1, Event2, Event3, Event4, Event5, Event6, Event7, Event8, Memberships, AllMembers, Counters, Constraints, Cost, Activities, Activity, Rights, Resource1, Resource2, Resource3, Resource4, Resource5, Resource6, Resource7, Resource8, Resource9, Resource10, Resource11, Resource12, Resource13 };
