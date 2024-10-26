import type { Credentials } from "../auth";

export interface Fetcher {
    baseUrl: string;

    initializeSession(credentials: Credentials): Promise<void>;
    terminateSession(): Promise<void>;

    /**
     * Executes a GET request.
     * @param params The query parameters to send with the request.
     * @returns A promise that resolves with the response data.
     */
    get<T>(params?: Record<string, any>): Promise<T>;
}