import { Color } from "../utils/color";
import { Resources } from "./resources";

export interface Event {
    id: number;
    activityId: number;
    session: number;
    repetition: number;
    name: string;
    endHour: string;
    startHour: string;
    date: Date;
    absoluteSlot: number;
    slot: number;
    day: number;
    week: number;
    additionalResources: number;
    duration: number;
    info: string;
    note: string;
    color: Color;
    isLockPosition: boolean;
    lastUpdate: Date;
    creation: Date;
    isLockResources: boolean;
    isSoftKeepResources: boolean;
    resources: Resources;
    additional: Additional;
}

export interface Events {
    events: Event[];
}

interface Additional {} // Don't know what to put here yet
