import { ADEFetcher } from "../utils/fetcher";
import { parseRGBColor } from "../utils/color";
import { parseDateFromDDMMYYYYHHMM } from "../utils/date";
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

/**
 * Get the resources list
 * @param fetcher ADEFetcher instance
 * @param params The parameters to pass to the API.
 * @returns A list of resources (Resources)
 */
export async function getResources(fetcher: ADEFetcher, params: ResourceParams): Promise<Resources> {
    const data = await fetcher.get({ function: "getResources", ...params }) as { resources: { resource: any[] } };
    
    return data.resources.resource.map(resource => ({
        id: parseInt(resource.$.id, 10),
        name: resource.$.name,
        path: resource.$.path,
        category: resource.$.category,
        isGroup: Boolean(resource.$.isGroup),
        type: resource.$.type,
        email: resource.$.email,
        url: resource.$.url,
        consumer: Boolean(resource.$.consumer),
        size: parseInt(resource.$.size, 10),
        lastUpdate: parseDateFromDDMMYYYYHHMM(resource.$.lastUpdate),
        creation: parseDateFromDDMMYYYYHHMM(resource.$.creation),
        lastSlot: parseInt(resource.$.lastSlot, 10),
        lastDay: parseInt(resource.$.lastDay, 10),
        lastWeek: parseInt(resource.$.lastWeek, 10),
        firstSlot: parseInt(resource.$.firstSlot, 10),
        firstDay: parseInt(resource.$.firstDay, 10),
        firstWeek: parseInt(resource.$.firstWeek, 10),
        durationInMinutes: parseInt(resource.$.durationInMinutes, 10),
        nbEventsPlaced: parseInt(resource.$.nbEventsPlaced, 10),
        availableQuantity: parseInt(resource.$.availableQuantity, 10),
        number: parseInt(resource.$.number, 10),
        fatherName: resource.$.fatherName,
        fatherId: parseInt(resource.$.fatherId, 10),
        info: resource.$.info,
        codeZ: resource.$.codeZ,
        codeY: resource.$.codeY,
        codeX: resource.$.codeX,
        manager: resource.$.manager,
        jobCategory: resource.$.jobCategory,
        timezone: resource.$.timezone,
        fax: resource.$.fax,
        telephone: resource.$.telephone,
        country: resource.$.country,
        city: resource.$.city,
        state: resource.$.state,
        zipCode: resource.$.zipCode,
        address2: resource.$.address2,
        address1: resource.$.address1,
        code: resource.$.code,
        color: parseRGBColor(resource.$.color),
        levelAccess: resource.$.levelAccess,
        owner: resource.$.owner,
        allMembers: resource.$.allMembers, // TODO: Parse members
        memberships: resource.$.memberships, // TODO: Parse memberships
        constraints: resource.$.constraints, // TODO: Parse contraints
        rights: resource.$.rights, // TODO: Parse rights
    }) as Resource);
}