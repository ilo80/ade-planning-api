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

export interface ResourceParams {
    tree?: string;
    folders?: string;
    leaves?: string;
    id?: number;
    name?: string;
    category?: string;
    type?: string;
    email?: string;
    url?: string;
    size?: number;
    quantity?: number;
    code?: string;
    address1?: string;
    address2?: string;
    zipCode?: string;
    state?: string;
    city?: string;
    country?: string;
    telephone?: string;
    fax?: string;
    timezone?: string;
    jobCategory?: string;
    manager?: string;
    codeX?: string;
    codeY?: string;
    codeZ?: string;
    info?: string;
}

export type ResourceByDetail<T extends number> =
    T extends 1 ? Resource1 :
    T extends 2 ? Resource2 :
    T extends 3 ? Resource3 :
    T extends 4 ? Resource4 :
    T extends 5 ? Resource5 :
    T extends 6 ? Resource6 :
    T extends 7 ? Resource7 :
    T extends 8 ? Resource8 :
    T extends 9 ? Resource9 :
    T extends 10 ? Resource10 :
    T extends 11 ? Resource11 :
    T extends 12 ? Resource12 :
    T extends 13 ? Resource13 :
    never;

