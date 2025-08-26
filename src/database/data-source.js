"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const user_entity_1 = require("../src/users/entities/user.entity");
const role_entity_1 = require("../src/roles/entities/role.entity");
(0, dotenv_1.config)();
const isProduction = process.env.NODE_ENV === 'production';
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: isProduction ? process.env.DATABASE_URL : undefined,
    host: isProduction ? undefined : process.env.DB_HOST,
    port: isProduction ? undefined : parseInt(process.env.DB_PORT ?? '5432', 10),
    username: isProduction ? undefined : process.env.DB_USERNAME,
    password: isProduction ? undefined : process.env.DB_PASSWORD,
    database: isProduction ? undefined : process.env.DB_NAME,
    entities: [user_entity_1.User, role_entity_1.Role],
    migrations: ['database/migrations/*.ts'],
    synchronize: false,
    ssl: isProduction ? { rejectUnauthorized: false } : false,
});
//# sourceMappingURL=data-source.js.map