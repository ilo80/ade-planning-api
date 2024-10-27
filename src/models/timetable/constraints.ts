import { Costs } from './costs';
import { Caracteristics } from './caracteristics';
import { Counters } from './counters';
import { SetupTimes } from './time';

export interface Constraints {
    quality: number;
    distribution: number;
    costs: Costs;
    caracteristics?: Caracteristics;
    counters: Counters;
    setupTimes?: SetupTimes;
}