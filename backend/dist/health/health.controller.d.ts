export declare class HealthController {
    checkHealth(): {
        status: string;
        service: string;
        version: string;
        timestamp: string;
        environment: string;
        uptimeSeconds: number;
    };
}
