import { UserRole } from '../enums/user-role.enum';
export declare class User {
    id: number;
    username: string;
    password: string;
    role: UserRole;
    email: string;
}
