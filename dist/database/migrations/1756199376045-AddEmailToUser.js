"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEmailToUser1756199376045 = void 0;
class AddEmailToUser1756199376045 {
    name = 'AddEmailToUser1756199376045';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
    }
}
exports.AddEmailToUser1756199376045 = AddEmailToUser1756199376045;
//# sourceMappingURL=1756199376045-AddEmailToUser.js.map