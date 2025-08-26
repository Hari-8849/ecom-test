import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../enums/user-role.enum';

export class CreateUserDto {
  @ApiProperty({ example: 'john_doe', description: 'Username of the user' })
  username: string;

  @ApiProperty({ example: 'password123', description: 'Password of the user' })
  password: string;

  @ApiProperty({ example: 'user', enum: UserRole, description: 'Role of the user' })
  role: UserRole;
}
