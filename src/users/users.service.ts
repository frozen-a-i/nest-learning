import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  // private customers = [
  //   { id: 0, name: 'Elsa', phone: '991234567' },
  //   { id: 1, name: 'Anna', phone: '995087739' },
  // ];

  async create(createCustomerDto: CreateCustomerDto): Promise<User> {
    const newCustomer = this.userRepository.create(createCustomerDto);
    return await this.userRepository.save(newCustomer);
  }

  findAll() {
    return this.userRepository.find;
  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { id } });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
