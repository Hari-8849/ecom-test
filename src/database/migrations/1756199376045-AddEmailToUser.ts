import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailToUser1756199376045 implements MigrationInterface {
    name = 'AddEmailToUser1756199376045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
    }

}
