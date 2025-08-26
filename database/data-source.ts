import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from '../src/users/entities/user.entity';
import { Role } from '../src/roles/entities/role.entity';

config(); // load .env

const isProduction = process.env.NODE_ENV === 'production';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: isProduction ? process.env.DATABASE_URL : undefined,
  host: isProduction ? undefined : process.env.DB_HOST,
  port: isProduction ? undefined : parseInt(process.env.DB_PORT ?? '5432', 10),
  username: isProduction ? undefined : process.env.DB_USERNAME,
  password: isProduction ? undefined : process.env.DB_PASSWORD,
  database: isProduction ? undefined : process.env.DB_NAME,
  entities: [User, Role],
  migrations: ['database/migrations/*.ts'],
  synchronize: false,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
});
