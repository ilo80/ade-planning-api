import { ADEFetcher } from "../utils/fetcher";
import type { ActivityParams, ActivityByDetail } from "../models/timetable";
import { parseDateFromDDMMYYYYHHMM } from "../utils/date";
import { parseRGBColor } from "../utils/color";

/**
 * Get the activities list
 * @param fetcher ADEFetcher instance
 * @param params The parameters to pass to the API
 * @returns A list of activities
 */
export async function getActivities<T extends number>(fetcher: ADEFetcher, params: ActivityParams & { detail: T }): Promise<ActivityByDetail<T>[]> {
    const data = await fetcher.get({  function: 'getActivities', ...params }) as { activities?: { activity: any[] } };

    if (!data.activities) {
        return []
    }

    return data.activities.activity.map(activity => {
        const baseActivity = { id: parseInt(activity.$.id, 10) };

        if (params.detail >= 2) {
            Object.assign(baseActivity, { name: activity.$.name });
        }

        if (params.detail >= 3) {
            Object.assign(baseActivity, {
                type: activity.$.type,
                folderId: parseInt(activity.$.folderId, 10)
            })
        }

        if (params.detail >= 4) {
            Object.assign(baseActivity, { url: activity.$.url });
        }

        if (params.detail >= 5) {
            Object.assign(baseActivity, { size: parseInt(activity.$.size, 10) });
        }

        if (params.detail >= 6) {
            Object.assign(baseActivity, { repetition: parseInt(activity.$.repetition, 10) });
        }

        if (params.detail >= 7) {
            Object.assign(baseActivity, {
                lastUpdate: parseDateFromDDMMYYYYHHMM(activity.$.lastUpdate),
                creation: parseDateFromDDMMYYYYHHMM(activity.$.creation),
                lastSlot: parseInt(activity.$.lastSlot, 10),
                lastDay: parseInt(activity.$.lastDay, 10),
                lastWeek: parseInt(activity.$.lastWeek, 10),
                firstSlot: parseInt(activity.$.firstSlot, 10),
                firstDay: parseInt(activity.$.firstDay, 10),
                firstWeek: parseInt(activity.$.firstWeek, 10),
                additionalResources: parseInt(activity.$.additionalResources, 10),
                durationInMinutes: parseInt(activity.$.durationInMinutes, 10),
                nbEventsPlaced: parseInt(activity.$.nbEventsPlaced, 10),
                nbEvents: parseInt(activity.$.nbEvents, 10),
                duration: activity.$.duration
            })
        }

        if (params.detail >= 8) {
            Object.assign(baseActivity, { email: activity.$.email });
        }

        if (params.detail >= 9) {
            const seatsLeft = parseInt(activity.$.seatsLeft, 10)
            const maxSeats = parseInt(activity.$.maxSeats, 10)

            Object.assign(baseActivity, {
                weight: parseInt(activity.$.weight, 10),
                seatsLeft: Number.isNaN(seatsLeft) ? -1 : seatsLeft,
                maxSeats: Number.isNaN(maxSeats) ? -1 : seatsLeft,
                info: activity.$.info,
                code: activity.$.code,
                codeX: activity.$.codeX,
                codeY: activity.$.codeY,
                codeZ: activity.$.codeZ,
                timezone: activity.$.timezone,
                color: parseRGBColor(activity.$.color)
            })
        }

        if (params.detail >= 10) {
            Object.assign(baseActivity, { isActive: Boolean(activity.$.isActive) })
        }

        if (params.detail >= 11) {
            Object.assign(baseActivity, { isNotSameDay: Boolean(activity.$.isNotSameDay) })
        }

        if (params.detail >= 12) {
            Object.assign(baseActivity, { isGrouped: Boolean(activity.$.isGrouped) })
        }

        if (params.detail >= 13) {
            Object.assign(baseActivity, {
                isAligned: Boolean(activity.$.isAligned),
                isSuccessiveDays: Boolean(activity.$.isSuccessiveDays)
            })
        }

        if (params.detail >= 14) {
            Object.assign(baseActivity, {
                ownerId: parseInt(activity.$.ownerId),
                owner: activity.$.owner
            })
        }

        if (params.detail >= 15) {
            Object.assign(baseActivity, { resources: {} }) // TODO: Parse resources (without Costs)
        }

        if (params.detail >= 16) {
            Object.assign(baseActivity, { resources: {} }) // TODO: Parse resources (with Costs)
        }

        if (params.detail >= 17) {
            Object.assign(baseActivity, { events: {} }) // TODO: Parse events
        }

        return baseActivity;
    }) as ActivityByDetail<T>[];
}