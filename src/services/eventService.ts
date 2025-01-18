import { ADEFetcher } from "../utils/fetcher";
import { parseRGBColor } from "../utils/color";
import { parseDateFromDDMMYYYY, parseDateFromDDMMYYYYHHMM } from "../utils/date";
import type { EventParams, EventByDetail } from "../models/timetable";

/**
 * Get the events list
 * @param fetcher ADEFetcher instance
 * @param params The parameters to pass to the API.
 * @returns A list of events (Event[])
 */
export async function getEvents<T extends number>(fetcher: ADEFetcher, params: EventParams & { detail: T }): Promise<EventByDetail<T>[]> {
    const data = await fetcher.get({ function: "getEvents", ...params }) as { events?: { event: any[] }, event?: any[] };

    if (!data.events) { // Single event
        data.events = { event: [data.event] };
    }

    if (!data.events.event[0]) { // No events
        return [];
    }

    return data.events.event.map(event => {
        const baseEvent = {
            id: parseInt(event.$.id, 10),
            activityId: parseInt(event.$.activityId, 10),
            session: event.$.session,
            repetition: parseInt(event.$.repetition, 10),
        };

        if (params.detail >= 2) {
            Object.assign(baseEvent, { name: event.$.name });
        }

        if (params.detail >= 3) {
            Object.assign(baseEvent, { 
                endHour: event.$.endHour,
                startHour: event.$.startHour,
                date: parseDateFromDDMMYYYY(event.$.date),
                absoluteSlot: parseInt(event.$.absoluteSlot, 10),
                slot: parseInt(event.$.slot, 10),
                day: parseInt(event.$.day, 10),
                week: parseInt(event.$.week, 10),
             });
        }

        if (params.detail >= 4) {
            Object.assign(baseEvent, {
                additionalResources: parseInt(event.$.additionalResources, 10),
                duration: parseInt(event.$.duration, 10),
            });
        }

        if (params.detail >= 5) {
            Object.assign(baseEvent, {
                info: event.$.info,
                note: event.$.note,
                color: parseRGBColor(event.$.color),
            });
        }

        if (params.detail >= 6) {
            Object.assign(baseEvent, { isLockPosition: Boolean(event.$.isLockPosition) });
        }

        if (params.detail >= 7) {
            Object.assign(baseEvent, {
                lastUpdate: parseDateFromDDMMYYYYHHMM(event.$.lastUpdate),
                creation: parseDateFromDDMMYYYYHHMM(event.$.creation),
                isLockResources: Boolean(event.$.isLockResources),
                isSoftKeepResources: Boolean(event.$.isSoftKeepResources),
            });
        }

        if (params.detail >= 8) {
            Object.assign(baseEvent, {
                resources: event.resources, // TODO: Parse resources
                additional: event.additional, // TODO: Parse additional
            });
        }

        return baseEvent;
    }) as EventByDetail<T>[];
}
