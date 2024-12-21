import { ADEFetcher } from "../utils/fetcher";
import { Resources, Resource } from "../models/timetable/resources";

interface ResourceParams {
    tree: number;
    folders: number;
    leaves: number;
    id: number;
    name: string;
    category: string;
    type: string;
    email: string;
    url: string;
    size: number;
    quantity: number;
    code: string;
    address1: string;
    address2: string;
    zipCode: string;
    state: string;
    city: string;
    country: string;
    telephone: string;
    fax: string;
    timezone: string;
    jobCategory: string;
    manager: string;
    codeX: string;
    codeY: string;
    codeZ: string;
    info: string;
    detail: string;
}
