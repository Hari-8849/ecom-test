import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dtos/create-role.dto';
import { UpdateRoleDto } from './dtos/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  create(dto: CreateRoleDto) {
    const role = this.rolesRepository.create(dto);
    return this.rolesRepository.save(role);
  }

  findAll() {
    return this.rolesRepository.find();
  }

  findOne(id: number) {
    return this.rolesRepository.findOne({ where: { id } });
  }

  async update(id: number, dto: UpdateRoleDto) {
    await this.rolesRepository.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.rolesRepository.delete(id);
  }
}
