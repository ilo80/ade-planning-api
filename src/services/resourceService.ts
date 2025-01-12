import { ADEFetcher } from "../utils/fetcher";
import { parseRGBColor } from "../utils/color";
import { parseDateFromDDMMYYYYHHMM } from "../utils/date";
import { Resource1, Resource2, Resource3, Resource4, Resource5, Resource6, Resource7, Resource8, Resource9, Resource10, Resource11, Resource12, Resource13, Resource } from "../models/timetable";

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
    detail: number;
}

/**
 * Get the resources list
 * @param fetcher ADEFetcher instance
 * @param params The parameters to pass to the API.
 * @returns A list of resources (Resource[])
 */
export async function getResources(fetcher: ADEFetcher, params: ResourceParams) : Promise<Resource[]>{
    const data = await fetcher.get({ function: "getResources", ...params }) as { resources: { resource: any[] } };

    switch (params.detail) {
        default:
        case 1:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10)
            })) as Resource1[];

        case 2:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name
            })) as Resource2[];
        
        case 3:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name,
                path: ressource.$.path,
                category: ressource.$.category
            })) as Resource3[];
        
        case 4:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name,
                path: ressource.$.path,
                category: ressource.$.category,
                isGroup: Boolean(ressource.$.isGroup)
            })) as Resource4[];

        case 5:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name,
                path: ressource.$.path,
                category: ressource.$.category,
                isGroup: Boolean(ressource.$.isGroup),
                type: ressource.$.type
            })) as Resource5[];

        case 6:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name,
                path: ressource.$.path,
                category: ressource.$.category,
                isGroup: Boolean(ressource.$.isGroup),
                type: ressource.$.type,
                email: ressource.$.email
            })) as Resource6[];
        
        case 7:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name,
                path: ressource.$.path,
                category: ressource.$.category,
                isGroup: Boolean(ressource.$.isGroup),
                type: ressource.$.type,
                email: ressource.$.email,
                url: ressource.$.url
            })) as Resource7[];

        case 8:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name,
                path: ressource.$.path,
                category: ressource.$.category,
                isGroup: Boolean(ressource.$.isGroup),
                type: ressource.$.type,
                email: ressource.$.email,
                url: ressource.$.url,
                consumer: Boolean(ressource.$.consumer),
                size: parseInt(ressource.$.size, 10)
            })) as Resource8[];

        case 9:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name,
                path: ressource.$.path,
                category: ressource.$.category,
                isGroup: Boolean(ressource.$.isGroup),
                type: ressource.$.type,
                email: ressource.$.email,
                url: ressource.$.url,
                consumer: Boolean(ressource.$.consumer),
                size: parseInt(ressource.$.size, 10),
                lastUpdate: parseDateFromDDMMYYYYHHMM(ressource.$.lastUpdate),
                creation: parseDateFromDDMMYYYYHHMM(ressource.$.creation),
                lastDay: parseInt(ressource.$.lastDay, 10),
                lastWeek: parseInt(ressource.$.lastWeek, 10),
                firstSlot: parseInt(ressource.$.firstSlot, 10),
                firstDay: parseInt(ressource.$.firstDay, 10),
                firstWeek: parseInt(ressource.$.firstWeek, 10),
                durationInMinutes: parseInt(ressource.$.durationInMinutes, 10),
                nbEventsPlaced: parseInt(ressource.$.nbEventsPlaced, 10),
                availableQuantity: parseInt(ressource.$.availableQuantity, 10),
                number: parseInt(ressource.$.number, 10)
            })) as Resource9[];
        
        case 10:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name,
                path: ressource.$.path,
                category: ressource.$.category,
                isGroup: Boolean(ressource.$.isGroup),
                type: ressource.$.type,
                email: ressource.$.email,
                url: ressource.$.url,
                consumer: Boolean(ressource.$.consumer),
                size: parseInt(ressource.$.size, 10),
                lastUpdate: parseDateFromDDMMYYYYHHMM(ressource.$.lastUpdate),
                creation: parseDateFromDDMMYYYYHHMM(ressource.$.creation),
                lastDay: parseInt(ressource.$.lastDay, 10),
                lastWeek: parseInt(ressource.$.lastWeek, 10),
                firstSlot: parseInt(ressource.$.firstSlot, 10),
                firstDay: parseInt(ressource.$.firstDay, 10),
                firstWeek: parseInt(ressource.$.firstWeek, 10),
                durationInMinutes: parseInt(ressource.$.durationInMinutes, 10),
                nbEventsPlaced: parseInt(ressource.$.nbEventsPlaced, 10),
                availableQuantity: parseInt(ressource.$.availableQuantity, 10),
                number: parseInt(ressource.$.number, 10),
                fatherName: ressource.$.fatherName,
                fatherId: parseInt(ressource.$.fatherId, 10)
            })) as Resource10[];

        case 11:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name,
                path: ressource.$.path,
                category: ressource.$.category,
                isGroup: Boolean(ressource.$.isGroup),
                type: ressource.$.type,
                email: ressource.$.email,
                url: ressource.$.url,
                consumer: Boolean(ressource.$.consumer),
                size: parseInt(ressource.$.size, 10),
                lastUpdate: parseDateFromDDMMYYYYHHMM(ressource.$.lastUpdate),
                creation: parseDateFromDDMMYYYYHHMM(ressource.$.creation),
                lastDay: parseInt(ressource.$.lastDay, 10),
                lastWeek: parseInt(ressource.$.lastWeek, 10),
                firstSlot: parseInt(ressource.$.firstSlot, 10),
                firstDay: parseInt(ressource.$.firstDay, 10),
                firstWeek: parseInt(ressource.$.firstWeek, 10),
                durationInMinutes: parseInt(ressource.$.durationInMinutes, 10),
                nbEventsPlaced: parseInt(ressource.$.nbEventsPlaced, 10),
                availableQuantity: parseInt(ressource.$.availableQuantity, 10),
                number: parseInt(ressource.$.number, 10),
                fatherName: ressource.$.fatherName,
                fatherId: parseInt(ressource.$.fatherId, 10),
                info: ressource.$.info,
                codeZ: ressource.$.codeZ,
                codeX: ressource.$.codeX,
                manager: ressource.$.manager,
                jobCategory: ressource.$.jobCategory,
                timezone: ressource.$.timezone,
                fax: ressource.$.fax,
                telephone: ressource.$.telephone,
                country: ressource.$.country,
                city: ressource.$.city,
                state: ressource.$.state,
                zipCode: ressource.$.zipCode,
                address2: ressource.$.address2,
                address1: ressource.$.address1,
                code: ressource.$.code,
                color: parseRGBColor(ressource.$.color),

            })) as Resource11[];
        
        case 12:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name,
                path: ressource.$.path,
                category: ressource.$.category,
                isGroup: Boolean(ressource.$.isGroup),
                type: ressource.$.type,
                email: ressource.$.email,
                url: ressource.$.url,
                consumer: Boolean(ressource.$.consumer),
                size: parseInt(ressource.$.size, 10),
                lastUpdate: parseDateFromDDMMYYYYHHMM(ressource.$.lastUpdate),
                creation: parseDateFromDDMMYYYYHHMM(ressource.$.creation),
                lastDay: parseInt(ressource.$.lastDay, 10),
                lastWeek: parseInt(ressource.$.lastWeek, 10),
                firstSlot: parseInt(ressource.$.firstSlot, 10),
                firstDay: parseInt(ressource.$.firstDay, 10),
                firstWeek: parseInt(ressource.$.firstWeek, 10),
                durationInMinutes: parseInt(ressource.$.durationInMinutes, 10),
                nbEventsPlaced: parseInt(ressource.$.nbEventsPlaced, 10),
                availableQuantity: parseInt(ressource.$.availableQuantity, 10),
                number: parseInt(ressource.$.number, 10),
                fatherName: ressource.$.fatherName,
                fatherId: parseInt(ressource.$.fatherId, 10),
                info: ressource.$.info,
                codeZ: ressource.$.codeZ,
                codeX: ressource.$.codeX,
                manager: ressource.$.manager,
                jobCategory: ressource.$.jobCategory,
                timezone: ressource.$.timezone,
                fax: ressource.$.fax,
                telephone: ressource.$.telephone,
                country: ressource.$.country,
                city: ressource.$.city,
                state: ressource.$.state,
                zipCode: ressource.$.zipCode,
                address2: ressource.$.address2,
                address1: ressource.$.address1,
                code: ressource.$.code,
                color: parseRGBColor(ressource.$.color),
                levelAccess: ressource.$.levelAccess,
                owner: ressource.$.owner,
                rights: ressource.$.rights,

            })) as Resource12[];

        case 13:
            return data.resources.resource.map(ressource => ({
                id: parseInt(ressource.$.id, 10),
                name: ressource.$.name,
                path: ressource.$.path,
                category: ressource.$.category,
                isGroup: Boolean(ressource.$.isGroup),
                type: ressource.$.type,
                email: ressource.$.email,
                url: ressource.$.url,
                consumer: Boolean(ressource.$.consumer),
                size: parseInt(ressource.$.size, 10),
                lastUpdate: parseDateFromDDMMYYYYHHMM(ressource.$.lastUpdate),
                creation: parseDateFromDDMMYYYYHHMM(ressource.$.creation),
                lastDay: parseInt(ressource.$.lastDay, 10),
                lastWeek: parseInt(ressource.$.lastWeek, 10),
                firstSlot: parseInt(ressource.$.firstSlot, 10),
                firstDay: parseInt(ressource.$.firstDay, 10),
                firstWeek: parseInt(ressource.$.firstWeek, 10),
                durationInMinutes: parseInt(ressource.$.durationInMinutes, 10),
                nbEventsPlaced: parseInt(ressource.$.nbEventsPlaced, 10),
                availableQuantity: parseInt(ressource.$.availableQuantity, 10),
                number: parseInt(ressource.$.number, 10),
                fatherName: ressource.$.fatherName,
                fatherId: parseInt(ressource.$.fatherId, 10),
                info: ressource.$.info,
                codeZ: ressource.$.codeZ,
                codeX: ressource.$.codeX,
                manager: ressource.$.manager,
                jobCategory: ressource.$.jobCategory,
                timezone: ressource.$.timezone,
                fax: ressource.$.fax,
                telephone: ressource.$.telephone,
                country: ressource.$.country,
                city: ressource.$.city,
                state: ressource.$.state,
                zipCode: ressource.$.zipCode,
                address2: ressource.$.address2,
                address1: ressource.$.address1,
                code: ressource.$.code,
                color: parseRGBColor(ressource.$.color),
                levelAccess: ressource.$.levelAccess,
                owner: ressource.$.owner,
                rights: ressource.$.rights,
                allMembers: ressource.$.allMembers,
                memberships: ressource.$.memberships,
                contraints: ressource.$.constraints,
                cost: ressource.$.cost,
                caracteristics: ressource.$.caracteristics,
                counters: ressource.$.counters,
                setupTimes: ressource.$.setupTimes
            })) as Resource13[];
    }
}
