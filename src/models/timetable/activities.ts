import { Color } from "../utils";
import { Events } from "./events";
import { Resources } from "./resources";
import { Rights } from "./rights";

export interface Activity {
    id: number;
    name: string;
    type: string;
    folderId: number;
    url: string
    size: number;
    repetitions: number;
    lastUpdate: Date;
    creation: Date;
    lastSlot: number;
    lastDay: number;
    lastWeek: number;
    firstSlot: number;
    firstDay: number;
    firstWeek: number;
    additionalResources: number;
    durationInMinutes: number;
    nbEventsPlaced: number;
    nbEvents: number;
    duration: string; // Duration in minutes of each event. Format : "minute+minute+minute+..."
    email: string;
    weigth: number;
    seatsLeft: number;
    maxSeats: number;
    info: string;
    codeZ: string;
    codeY: string;
    codeX: string;
    timezone: string;
    code: string;
    color: Color;
    isActive: boolean;
    isNotSameDay: boolean;
    isGrouped: boolean;
    isAligned: boolean;
    isSuccessiveDays: boolean;
    ownerId: number;
    owner: string;
    events: Events;
    resources: Resources;
    rights: Rights;
}