import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateLeadDto {
  @ApiProperty({ example: 'Rahul Nair', description: 'Full name of the lead' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'rahul@company.com', description: 'Work email address' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '+91 9048009044', description: 'Phone or WhatsApp contact number' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'meta-ads', description: 'Requested service specialization' })
  @IsString()
  @IsNotEmpty()
  service: string;

  @ApiProperty({ example: 'Looking to scale Meta Ads leads in Kerala & UAE.', description: 'Project details and requirements' })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({ example: 'Kochi, Kerala', required: false, description: 'Client business location' })
  @IsString()
  @IsOptional()
  location?: string;
}
