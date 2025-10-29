import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTags1761760025330 implements MigrationInterface {
  name = 'CreateTags1761760025330';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cars" ("id" SERIAL NOT NULL, "make" character varying NOT NULL, "model" character varying NOT NULL, "gen" character varying NOT NULL, "year" integer NOT NULL, "fuel" character varying NOT NULL, "engineSize" numeric NOT NULL, "bodyType" character varying NOT NULL, "gearType" character varying NOT NULL, "vin" character varying, "purchaseDate" TIMESTAMP WITH TIME ZONE NOT NULL, "purchasePriceByn" integer NOT NULL, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
