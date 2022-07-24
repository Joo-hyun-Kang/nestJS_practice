import { PowerService } from 'src/power/power.service';
export declare class DiskService {
    powerService: PowerService;
    constructor(powerService: PowerService);
    getDate(): string;
}
