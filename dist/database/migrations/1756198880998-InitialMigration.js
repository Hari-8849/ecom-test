"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1756198880998 = void 0;
class InitialMigration1756198880998 {
    name = 'InitialMigration1756198880998';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'user', CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.InitialMigration1756198880998 = InitialMigration1756198880998;
//# sourceMappingURL=1756198880998-InitialMigration.js.map