export interface Cost { 
    id: number;
    name: string;
    value: number;
}

export interface Costs {
    costs: Cost[];
}