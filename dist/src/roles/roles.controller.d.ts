import { RolesService } from './roles.service';
import { CreateRoleDto } from './dtos/create-role.dto';
import { UpdateRoleDto } from './dtos/update-role.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(dto: CreateRoleDto): Promise<import("./entities/role.entity").Role>;
    findAll(): Promise<import("./entities/role.entity").Role[]>;
    findOne(id: string): Promise<import("./entities/role.entity").Role | null>;
    update(id: string, dto: UpdateRoleDto): Promise<import("./entities/role.entity").Role | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
