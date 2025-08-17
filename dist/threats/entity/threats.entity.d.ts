import { incidents } from 'src/incidents/entity/incidents.entity';
import { services } from 'src/services/entity/services.entity';
import { threattypes } from 'src/threattypes/entity/threattypes.entity';
export declare class threats {
    id: string;
    metadata: object | null;
    detectedAt: Date;
    incidents: incidents[];
    sourceService: services;
    targetService: services;
    threatType: threattypes;
}
