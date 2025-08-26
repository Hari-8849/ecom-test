import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddEmailToUser1756199376045 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
