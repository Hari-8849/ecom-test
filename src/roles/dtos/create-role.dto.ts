import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'support', description: 'Name of the role' })
  name: string;
}
