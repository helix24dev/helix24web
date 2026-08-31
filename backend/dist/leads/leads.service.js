"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LeadsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsService = void 0;
const common_1 = require("@nestjs/common");
let LeadsService = LeadsService_1 = class LeadsService {
    constructor() {
        this.logger = new common_1.Logger(LeadsService_1.name);
        this.leads = [];
    }
    async createLead(createLeadDto) {
        const leadId = `LEAD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        const newLead = {
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
    async getAllLeads() {
        return this.leads;
    }
};
exports.LeadsService = LeadsService;
exports.LeadsService = LeadsService = LeadsService_1 = __decorate([
    (0, common_1.Injectable)()
], LeadsService);
//# sourceMappingURL=leads.service.js.map