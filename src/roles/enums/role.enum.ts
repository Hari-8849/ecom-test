import { ApiProperty } from '@nestjs/swagger';

export enum RoleEnum {
  ADMIN = 'admin',
  SUPERADMIN = 'superadmin',
  USER = 'user',
  MANAGER = 'manager',
  DRIVER = 'driver',
}

// For Swagger enum display
export const RoleEnumList = [
  RoleEnum.ADMIN,
  RoleEnum.SUPERADMIN,
  RoleEnum.USER,
  RoleEnum.MANAGER,
  RoleEnum.DRIVER,
];
