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
    weight: number;
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

export type ActivityByDetail<T extends number> =
    T extends 1 ? Activity1 :
    T extends 2 ? Activity2 :
    T extends 3 ? Activity3 :
    T extends 4 ? Activity4 :
    T extends 5 ? Activity5 :
    T extends 6 ? Activity6 :
    T extends 7 ? Activity7 :
    T extends 8 ? Activity8 :
    T extends 9 ? Activity9 :
    T extends 10 ? Activity10 :
    T extends 11 ? Activity11 :
    T extends 12 ? Activity12 :
    T extends 13 ? Activity13 :
    T extends 14 ? Activity14 :
    T extends 15 ? Activity15 :
    T extends 16 ? Activity16 :
    T extends 17 ? Activity17 :
    never;

export interface ActivityParams {
    tree?: string;
    id?: number;
    name?: string;
    resources?: Resource[];
    type?: string;
    url?: string;
    capacity?: number;
    duration?: string;
    repetition?: number;
    code?: string;
    timezone?: string;
    codeX?: string;
    codeY?: string;
    codeZ?: string;
    maxSeats?: number;
    seatsLeft?: number;
    info?: string;
}
