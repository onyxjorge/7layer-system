import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async findAll(): Promise<Partial<User>[]> {
    const users = await this.userRepo.find();
    return users.map(({ password, ...rest }) => rest);
  }

  async findOne(id: number): Promise<User | null> {
    return this.userRepo.findOneBy({ id });
  }

  async create(user: Partial<User>): Promise<User> {
    if (!user.password) {
      throw new Error('Password is required');
    }
  
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
  
    const newUser = this.userRepo.create({
      ...user,
      password: hashedPassword,
    });
  
    return this.userRepo.save(newUser);
  }


  async update(id: number, user: Partial<User>): Promise<User | null> {
    await this.userRepo.update(id, user);
    return this.userRepo.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.userRepo.delete(id);
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userRepo.findOneBy({ username });
  }
  
}
