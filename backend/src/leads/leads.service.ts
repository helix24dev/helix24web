import { Injectable, Logger } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';

export interface LeadRecord extends CreateLeadDto {
  id: string;
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'PROPOSAL_SENT' | 'CLOSED';
  createdAt: Date;
}

@Injectable()
export class LeadsService {
  private readonly logger = new Logger(LeadsService.name);
  private leads: LeadRecord[] = [];

  async createLead(createLeadDto: CreateLeadDto): Promise<{ success: boolean; leadId: string; message: string }> {
    const leadId = `LEAD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const newLead: LeadRecord = {
      ...createLeadDto,
      id: leadId,
      status: 'NEW',
      createdAt: new Date(),
    };

    this.leads.push(newLead);
    this.logger.log(`📥 New Lead Captured [${leadId}]: ${newLead.name} (${newLead.email}) — Service: ${newLead.service}`);

    return {
      success: true,
      leadId,
      message: `Thank you, ${createLeadDto.name}! Your consultation request has been logged. Our strategy team will reach out within 24 hours.`,
    };
  }

  async getAllLeads(): Promise<LeadRecord[]> {
    return this.leads;
  }
}
