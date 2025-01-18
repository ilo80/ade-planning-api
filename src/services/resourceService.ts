import { ADEFetcher } from "../utils/fetcher";
import { parseRGBColor } from "../utils/color";
import { parseDateFromDDMMYYYYHHMM } from "../utils/date";
import { ResourceParams, ResourceByDetail } from "../models/timetable";

/**
 * Get the resources list
 * @param fetcher ADEFetcher instance
 * @param params The parameters to pass to the API.
 * @returns A list of resources (Resource[])
 */
export async function getResources<T extends number>(fetcher: ADEFetcher, params: ResourceParams & { detail: T }): Promise<ResourceByDetail<T>[]>{
    const data = await fetcher.get({ function: "getResources", ...params }) as { resources: { resource: any[] } };

    return data.resources.resource.map(ressource => {
        const baseResource = { id: parseInt(ressource.$.id, 10) };

        if (params.detail >= 2) {
            Object.assign(baseResource, { name: ressource.$.name });
        }

        if (params.detail >= 3) {
            Object.assign(baseResource, { 
                path: ressource.$.path,
                category: ressource.$.category
            });
        }

        if (params.detail >= 4) {
            Object.assign(baseResource, { isGroup: Boolean(ressource.$.isGroup) });
        }

        if (params.detail >= 5) {
            Object.assign(baseResource, { type: ressource.$.type });
        }

        if (params.detail >= 6) {
            Object.assign(baseResource, { email: ressource.$.email });
        }

        if (params.detail >= 7) {
            Object.assign(baseResource, { url: ressource.$.url });
        }

        if (params.detail >= 8) {
            Object.assign(baseResource, { 
                consumer: Boolean(ressource.$.consumer),
                size: parseInt(ressource.$.size, 10)
            })
        }

        if (params.detail >= 9) {
            Object.assign(baseResource, { 
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
            });
        }

        if (params.detail >= 10) {
            Object.assign(baseResource, { 
                fatherName: ressource.$.fatherName,
                fatherId: parseInt(ressource.$.fatherId, 10)
            });
        }

        if (params.detail >= 11) {
            Object.assign(baseResource, { 
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
                color: parseRGBColor(ressource.$.color)
            });
        }

        if (params.detail >= 12) {
            Object.assign(baseResource, { 
                levelAccess: ressource.$.levelAccess,
                owner: ressource.$.owner,
                rights: ressource.$.rights
            });
        }

        if (params.detail >= 13) {
            Object.assign(baseResource, { 
                allMembers: ressource.$.allMembers,
                memberships: ressource.$.memberships,
                contraints: ressource.$.constraints,
                cost: ressource.$.cost,
                caracteristics: ressource.$.caracteristics,
                counters: ressource.$.counters,
                setupTimes: ressource.$.setupTimes
            });
        }

        return baseResource;
    }) as ResourceByDetail<T>[];
}
