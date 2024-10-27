import { Color } from "../utils/color";

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

interface Resources {
    resources: Resource[];
}

interface Resource {
    fromWorkflow: boolean;
    nodeId: number;
    nodeOrId: number;
    quantity: number;
    category: string;
    name: string;
    id: number;
}

interface Additional {} // Don't know what to put here yet
