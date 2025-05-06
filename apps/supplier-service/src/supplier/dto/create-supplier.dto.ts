// src/supplier/dto/create-supplier.dto.ts
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  contact: string;

  @IsString()
  taxType: string;

  @IsString()
  bankName: string;

  @IsString()
  accountName: string;

  @IsString()
  accountNumber: string;

  @IsString()
  contactPerson: string;

  @IsString()
  contactPersonNumber: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
