import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const isProduction = config.get<string>('NODE_ENV') === 'production';

        if (isProduction && config.get<string>('DATABASE_URL')) {
          return {
            type: 'postgres',
            url: config.get<string>('DATABASE_URL'),
            autoLoadEntities: true,
            synchronize: false, // ❌ use migrations in prod
            ssl: { rejectUnauthorized: false }, // required for Render
          };
        }

        return {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: config.get<string>('DB_USERNAME'),
          password: config.get<string>('DB_PASSWORD'),
          database: config.get<string>('DB_NAME'),
          autoLoadEntities: true,
          synchronize: true, // ok for local dev
        };
      },
    }),

    RolesModule,
    UsersModule,
  ],
})
export class AppModule {}
