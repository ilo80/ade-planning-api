import { Color } from "../utils/color";

export interface Cost { 
    id: number;
    name: string;
    value: number;
}

export interface Costs {
    costs: Cost[];
}

export interface Caracteristics {} // Don't know what to put here yet

export interface Counters {
    isUseCounter: boolean;
}

export interface SetupTimes {} // Don't know what to put here yet

export interface Constraints {
    quality: number;
    distribution: number;
    costs: Costs;
    caracteristics?: Caracteristics;
    counters: Counters;
    setupTimes?: SetupTimes;
}

export interface AllMembers {} // Don't know what to put here yet

export interface Memberships {} // Don't know what to put here yet

export interface Rights {
    otherRights: string;
    groupRights: string;
    userRights: string;
    group: string;
    profileName: string;
    profileId: number;
} 

// Interface for a single resource
// TODO: Investigate the meaning of all the fields
export interface Resource {
    id: number;
    name: string;
    path: string;
    category: string; // TODO: Specify all possible values. e.g. "trainee", etc..
    isGroup: boolean;
    type: string;
    email: string;
    url: string;
    consumer: boolean;
    size: number;
    lastUpdate: Date;
    creation: Date;
    lastSlot: number;
    lastDay: number;
    lastWeek: number;
    firstSlot: number;
    firstDay: number;
    firstWeek: number;
    durationInMinutes: number;
    nbEventsPlaced: number;
    availableQuantity: number;
    number: number;
    fatherName: number;
    fatherId: number;
    info: string,
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
    levelAccess: string;
    owner: string;
    allMembers: AllMembers;
    memberships: Memberships;
    constraints: Constraints;
    rights: Rights;
}

export interface Resources {
    ressources: Resource[]; 
}
