import { Color } from "../utils";
import { AllMembers, Memberships } from "./members";
import { Constraints } from "./constraints";
import { Rights } from "./rights";

// Interface for a single resource
// TODO: Investigate the meaning of all the fields
export interface Resource {
    id: number;
    name: string;
    path: string;
    category: string;
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
    fromWorkflow?: boolean;
    nodeId?: number;
    nodeOrId?: number;
    allMembers: AllMembers;
    memberships: Memberships;
    constraints: Constraints;
    rights: Rights;
}

export interface Resources {
    ressources: Resource[]; 
}
