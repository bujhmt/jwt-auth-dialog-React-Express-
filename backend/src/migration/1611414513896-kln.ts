import {MigrationInterface, QueryRunner} from "typeorm";

export class kln1611414513896 implements MigrationInterface {
    name = 'kln1611414513896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdBy" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" SET DEFAULT null`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedBy" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedBy" SET DEFAULT null`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."internalComment" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "internalComment" SET DEFAULT null`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdBy" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedBy" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedBy" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedBy" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."internalComment" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "internalComment" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."id" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "user_id_seq"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdBy" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" SET DEFAULT null`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedBy" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedBy" SET DEFAULT null`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."internalComment" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "internalComment" SET DEFAULT null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "internalComment" SET DEFAULT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."internalComment" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedBy" SET DEFAULT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedBy" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" SET DEFAULT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdBy" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createDateTime" IS NULL`);
        await queryRunner.query(`CREATE SEQUENCE "user_id_seq" OWNED BY "user"."id"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq')`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."id" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "internalComment" SET DEFAULT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."internalComment" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedBy" SET DEFAULT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedBy" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedBy" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" SET DEFAULT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdBy" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "internalComment" SET DEFAULT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."internalComment" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastChangedBy" SET DEFAULT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedBy" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."lastChangedDateTime" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdBy" SET DEFAULT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdBy" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createDateTime" IS NULL`);
    }

}
