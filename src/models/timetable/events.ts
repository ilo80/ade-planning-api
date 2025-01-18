import { Color } from "../utils";
import { Resource } from "./resources";
import { Category } from "../utils";

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

export type Event = Event1 | Event2 | Event3 | Event4 | Event5 | Event6 | Event7 | Event8;

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
