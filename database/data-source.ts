import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from '../src/users/entities/user.entity';
import { Role } from '../src/roles/entities/role.entity';

config(); // load .env file

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT??'',10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Role],
  migrations: ['database/migrations/*.ts'], // migrations folder
  synchronize: false, // ❌ never use sync with migrations
});
