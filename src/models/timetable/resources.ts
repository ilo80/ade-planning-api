import { Color } from "../utils";
import { AllMembers, Memberships } from "./members";
import { Constraints } from "./constraints";
import { Rights } from "./rights";
import { Category } from "../utils";

// TODO: Investigate the meaning of all the fields
export interface Resource1 {
    id: number;
}

export interface Resource2 extends Resource1 {
    name: string;
}

export interface Resource3 extends Resource2 {
    path: string;
    category: Category;
}

export interface Resource4 extends Resource3 {
    isGroup: boolean;
}

export interface Resource5 extends Resource4 {
    type: string;
}

export interface Resource6 extends Resource5 {
    email: string;
}

export interface Resource7 extends Resource6 {
    url: string;
}

export interface Resource8 extends Resource7 {
    consumer: boolean;
    size: number;
}

export interface Resource9 extends Resource8 {
    lastUpdate: Date;
    creation: Date;
    lastDay: number;
    lastWeek: number;
    firstSlot: number;
    firstDay: number;
    firstWeek: number;
    durationInMinutes: number;
    nbEventsPlaced: number;
    availableQuantity: number;
    number: number;
}

export interface Resource10 extends Resource9 {
    fatherName: string;
    fatherId: number;
}

export interface Resource11 extends Resource10 {
    info: string;
    codeZ: string;
    codeX: string;
    manager: string;
    jobCategory: string;
    timezone: string;
    fax: string;
    telephone: string;
    country: string;
    city: string;
    state: string;
    zipCode: string;
    address2: string;
    address1: string;
    code: string;
    color: Color;
}

export interface Resource12 extends Resource11 {
    levelAccess: string;
    owner: string;
    rights: Rights;
}

export interface Resource13 extends Resource12 {
    allMembers: AllMembers;
    memberships: Memberships;
    contraints: Constraints;
    cost: number;
    caracteristics: string;
    counters: string;
    setupTimes: string;
}

export type Resource = Resource1 | Resource2 | Resource3 | Resource4 | Resource5 | Resource6 | Resource7 | Resource8 | Resource9 | Resource10 | Resource11 | Resource12 | Resource13;
