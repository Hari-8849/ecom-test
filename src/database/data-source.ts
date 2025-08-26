import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from '../users/entities/user.entity';
import { Role } from '../roles/entities/role.entity';

config();

const isProduction = process.env.NODE_ENV === 'production';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: isProduction ? process.env.DATABASE_URL : undefined,

  // Local dev settings (only used if not production)
  host: !isProduction ? process.env.DB_HOST : undefined,
  port: !isProduction ? parseInt(process.env.DB_PORT ?? '5432', 10) : undefined,
  username: !isProduction ? process.env.DB_USERNAME : undefined,
  password: !isProduction ? process.env.DB_PASSWORD : undefined,
  database: !isProduction ? process.env.DB_NAME : undefined,

  entities: [User, Role],
  migrations: [
    isProduction ? 'dist/database/migrations/*.js' : 'src/database/migrations/*.ts',
  ],

  synchronize: false, // always false for safety
  ssl: isProduction
    ? { rejectUnauthorized: false } // Render requires SSL
    : false,
});
