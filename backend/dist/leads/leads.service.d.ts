import { CreateLeadDto } from './dto/create-lead.dto';
export interface LeadRecord extends CreateLeadDto {
    id: string;
    status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'PROPOSAL_SENT' | 'CLOSED';
    createdAt: Date;
}
export declare class LeadsService {
    private readonly logger;
    private leads;
    createLead(createLeadDto: CreateLeadDto): Promise<{
        success: boolean;
        leadId: string;
        message: string;
    }>;
    getAllLeads(): Promise<LeadRecord[]>;
}
