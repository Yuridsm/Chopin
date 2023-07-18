import { MigrationInterface, QueryRunner } from 'typeorm';

export class Book1689642183511 implements MigrationInterface {
    name = 'Book1689642183511';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "document" ("identifier" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL)`,
        );
        await queryRunner.query(
            `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "document"`);
    }
}
