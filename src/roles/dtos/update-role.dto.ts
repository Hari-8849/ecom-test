import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto {
  @ApiProperty({ example: 'operator', description: 'Updated role name' })
  name: string;
}
