import { ADEFetcher } from "../utils/fetcher";
import { Events, Event } from "../models/timetable/events";

interface EventParams {
    eventId: number;
    activities: number; // ???
    name: string;
    resources: number;
    weeks: number;
    days: number;
    date: string;
    detail: number;
}

function parseDateFromDDMMYYYY(date: string): Date {
    const [day, month, year] = date.split("/").map(Number);
    return new Date(year, month - 1, day);
}

function parseDateFromDDMMYYYYHHMM(dateString: string): Date {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/').map(num => parseInt(num, 10));
    const [hours, minutes] = timePart.split(':').map(num => parseInt(num, 10));

    return new Date(year, month - 1, day, hours, minutes);
}

/**
 * Get the events list
 * @param fetcher ADEFetcher instance
 * @param params The parameters to pass to the API.
 * @returns A list of events (Events)
 */
export async function getEvents(fetcher: ADEFetcher, params: EventParams): Promise<Events> {
    const data = await fetcher.get({ function: "getEvents", ...params }) as { events?: { event: any[] }, event?: any[] };

    if (!data.events) { // Single event
        data.events = { event: [data.event] };
    }

    return data.events.event.map(event => ({
        id: parseInt(event.$.id, 10),
        activityId: parseInt(event.$.activityId, 10),
        session: event.$.session,
        repetition: parseInt(event.$.repetition, 10),
        name: event.$.name,
        endHour: event.$.endHour,
        startHour: event.$.startHour,
        date: parseDateFromDDMMYYYY(event.$.date),
        absoluteSlot: parseInt(event.$.absoluteSlot, 10),
        slot: parseInt(event.$.slot, 10),
        day: parseInt(event.$.day, 10),
        week: parseInt(event.$.week, 10),
        additionalResources: parseInt(event.$.additionalResources, 10),
        duration: parseInt(event.$.duration),
        info: event.$.info,
        note: event.$.note,
        color: {r: parseInt(event.$.color.split(",")[0], 10), g: parseInt(event.$.color.split(",")[1], 10), b: parseInt(event.$.color.split(",")[2], 10)}, // Parse RGB as object
        isLockPosition: Boolean(event.$.isLockPosition),
        lastUpdate: parseDateFromDDMMYYYYHHMM(event.$.lastUpdate),
        creation: parseDateFromDDMMYYYYHHMM(event.$.creation),
        isLockResources: Boolean(event.$.isLockResources),
        isSoftKeepResources: Boolean(event.$.isSoftKeepResources),
        resources: event.resources, // TODO: Parse resources
        additional: event.additional // TODO: Parse additional
    }) as Event);
}
