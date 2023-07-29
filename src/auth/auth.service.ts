import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './models/user.entity';
import { Repository } from 'typeorm';
import { User } from './models/user.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
