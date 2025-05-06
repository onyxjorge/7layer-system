import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './supplier.entity';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepo: Repository<Supplier>,
  ) {}

  findAll(): Promise<Supplier[]> {
    return this.supplierRepo.find();
  }

  findOne(id: number): Promise<Supplier | null> {
    return this.supplierRepo.findOneBy({ id });
  }

  create(data: Partial<Supplier>): Promise<Supplier> {
    const supplier = this.supplierRepo.create(data);
    return this.supplierRepo.save(supplier);
  }

  async update(id: number, data: Partial<Supplier>): Promise<Supplier | null> {
    await this.supplierRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.supplierRepo.delete(id);
  }
}
