import { Color } from "../utils";
import { Event } from "./events";
import { Resource } from "./resources";
import { Rights } from "./rights";

export interface Activity1 {
    id: number;
}

export interface Activity2 extends Activity1 {
    name: string;
}

export interface Activity3 extends Activity2 {
    type: string;
    folderId: number;
}

export interface Activity4 extends Activity3 {
    url: string;
}

export interface Activity5 extends Activity4 {
    size: number;
}

export interface Activity6 extends Activity5 {
    repetitions: number;
}

export interface Activity7 extends Activity6 {
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
    duration: string;
}

export interface Activity8 extends Activity7 {
    email: string;
}

export interface Activity9 extends Activity8 {
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
}

export interface Activity10 extends Activity9 {
    isActive: boolean;
}

export interface Activity11 extends Activity10 {
    isNotSameDay: boolean;
}

export interface Activity12 extends Activity11 {
    isGrouped: boolean;
}

export interface Activity13 extends Activity12 {
    isAligned: boolean;
    isSuccessiveDays: boolean;
}

export interface Activity14 extends Activity13 {
    ownerId: number;
    owner: string;
    rights: Rights;
}

export interface Activity15 extends Activity14 {
    resources: Resource[]; // without Cost
}

export interface Activity16 extends Activity14 {
    resources: Resource[]; // with Cost
}

export interface Activity17 extends Activity16 {
    events: Event[];
}

export type Activity = Activity1 | Activity2 | Activity3 | Activity4 | Activity5 | Activity6 | Activity7 | Activity8 | Activity9 | Activity10 | Activity11 | Activity12 | Activity13 | Activity14 | Activity15 | Activity16 | Activity17;
