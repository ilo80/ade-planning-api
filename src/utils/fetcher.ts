import type { Credentials } from "../models/auth";
import type { Fetcher } from "../models/utils";
import { parseStringPromise } from "xml2js";

export class ADEFetcher implements Fetcher {
    readonly apiUrl: string;
    private sessionToken: string | null = null;

    constructor(baseUrl: string) {
        this.apiUrl = `${baseUrl}/jsp/webapi`;
    }

    /** 
     * Initializes a new session with the API.
     * @param credentials The credentials to use for authentication.
     * @returns A promise that resolves when the session is initialized.
    */
    async initializeSession(credentials: Credentials): Promise<void> {
        const queryString = new URLSearchParams({
            login: credentials.username,
            password: credentials.password,
            function: "connect",
        }).toString();

        const response = await fetch(`${this.apiUrl}?${queryString}`, {
            method: "GET",
            headers: { "Content-Type": "application/xml" },
        });

        if (!response.ok) {
            throw new Error("Failed to initialize session.");
        }

        const xmlData = await response.text();
        const parsedData = await parseStringPromise(xmlData);

        this.sessionToken = parsedData?.session?.$.id;

        if (!this.sessionToken) {
            throw new Error("Session ID not found in the response.");
        }
    }

    /** 
     * Terminates the current session with the API.
     * @returns A promise that resolves when the session is terminated.
    */
    async terminateSession(): Promise<void> {
        if (!this.sessionToken) {
            throw new Error("Session token not found.");
        }

        const queryString = new URLSearchParams({
            session: this.sessionToken,
            function: "disconnect",
        }).toString();

        await fetch(`${this.apiUrl}?${queryString}`, {
            method: "GET",
            headers: { "Content-Type": "application/xml" },
        });

        this.sessionToken = null;
    }

    /** 
     * Fetches data from the API.
     * @param params The parameters to include in the request.
     * @returns A promise that resolves with the fetched data.
    */
    async get<T>(params?: Record<string, any>): Promise<T> {
        if (!this.sessionToken) {
            throw new Error("Session token not found.");
        }

        const queryString = (new URLSearchParams({ ...(params || {}), sessionId: this.sessionToken })).toString(); // Add params and session token to the query string

        const response = await fetch(`${this.apiUrl}?${queryString}`, {
            method: "GET",
            headers: { "Content-Type": "application/xml" },
        });

        const xmlData = await response.text();
        const parsedData = await parseStringPromise(xmlData);

        return parsedData;
    }
}
