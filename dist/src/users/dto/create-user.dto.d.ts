import { UserRole } from '../enums/user-role.enum';
export declare class CreateUserDto {
    username: string;
    password: string;
    role: UserRole;
}
