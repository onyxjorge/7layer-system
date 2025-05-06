import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  address: string;

  @Column()
  contact: string;

  @Column()
  taxType: string;

  @Column()
  bankName: string;

  @Column()
  accountName: string;

  @Column()
  accountNumber: string;

  @Column()
  contactPerson: string;

  @Column()
  contactPersonNumber: string;

  @Column()
  email: string;
}
