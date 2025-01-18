import { Color } from "../utils";
import { Resource } from "./resources";

export interface Event1 {
    id: number;
    activityId: number;
    session: string;
    repetition: number;
}

export interface Event2 extends Event1 {
    name: string;
}

export interface Event3 extends Event2 {
    endHour: string;
    startHour: string;
    date: Date;
    absoluteSlot: number;
    slot: number;
    day: number;
    week: number;
}

export interface Event4 extends Event3 {
    additionalResources: number;
    duration: number;
}

export interface Event5 extends Event4 {
    info: string;
    note: string;
    color: Color;
}

export interface Event6 extends Event5 {
    isLockPosition: boolean;
}

export interface Event7 extends Event6 {
    lastUpdate: Date;
    creation: Date;
    isLockResources: boolean;
    isSoftKeepResources: boolean;
}

export interface Event8 extends Event7 {
    resources: Resource[];
    additional: Additional;
}

export type EventByDetail<T extends number> = 
    T extends 1 ? Event1 :
    T extends 2 ? Event2 :
    T extends 3 ? Event3 :
    T extends 4 ? Event4 :
    T extends 5 ? Event5 :
    T extends 6 ? Event6 :
    T extends 7 ? Event7 :
    T extends 8 ? Event8 :
    never;

export interface EventParams {
    eventId?: number;
    activities?: number;
    name?: string;
    resources?: number;
    weeks?: number;
    days?: number;
    date?: string;
};

export type Event = Event1 | Event2 | Event3 | Event4 | Event5 | Event6 | Event7 | Event8;

interface Additional {} // Don't know what to put here yet
