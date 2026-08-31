import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@ApiTags('Leads')
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  @ApiOperation({ summary: 'Submit a new agency project inquiry or consultation request' })
  @ApiResponse({ status: 201, description: 'Lead successfully captured in agency CRM pipeline' })
  @ApiResponse({ status: 400, description: 'Validation failed' })
  async createLead(@Body() createLeadDto: CreateLeadDto) {
    return this.leadsService.createLead(createLeadDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all captured lead records (Admin & Strategy Pipeline)' })
  @ApiResponse({ status: 200, description: 'List of captured agency leads' })
  async getAllLeads() {
    return this.leadsService.getAllLeads();
  }
}
