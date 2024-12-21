import { Color } from "../utils";
import { Resources } from "./resources";
import { Category } from "../utils";

export interface Event {
    id: number;
    activityId: number;
    session: string;
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

export type Events = Event[];

export interface EventParticipant {
    fromWorkflow: boolean;
    nodeId: number;
    nodeOrId: number;
    quantity: number;
    category: Category;
    name: string;
    id: number;
}

export interface EventParticipants {
    eventParticipants: EventParticipant[];
    additional: Additional;
}

interface Additional {} // Don't know what to put here yet
