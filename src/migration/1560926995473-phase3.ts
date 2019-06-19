import {MigrationInterface, QueryRunner} from "typeorm";

export class phase31560926995473 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" int NOT NULL IDENTITY(1,1), "comment" nvarchar(255) NOT NULL, "posted_at" datetime NOT NULL, "user_id" int, "owner_id" int, "review_id" int, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "locality" ("id" int NOT NULL IDENTITY(1,1), "city" nvarchar(255) NOT NULL, "state" nvarchar(255) NOT NULL, "country" nvarchar(255) NOT NULL, "postal_code" int NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, CONSTRAINT "PK_c0445d9b8706ac2d31be91c9b6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reviews" ("id" int NOT NULL IDENTITY(1,1), "rating_value" int NOT NULL, "review" nvarchar(255) NOT NULL, "posted_at" datetime NOT NULL, "user_id" int, "property_id" int, CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "unit_no" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "building_name" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "street" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "location_id" int`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_d154b3f2f34508a1112a04fc247" FOREIGN KEY ("owner_id") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_0fe168752ce3bb4e7376d81f7ad" FOREIGN KEY ("review_id") REFERENCES "reviews"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_5ce976b11adafc6ec1effdce0ff" FOREIGN KEY ("location_id") REFERENCES "locality"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_2b1e1cd13649e9315b28b7f2f0c" FOREIGN KEY ("property_id") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_2b1e1cd13649e9315b28b7f2f0c"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_728447781a30bc3fcfe5c2f1cdf"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_5ce976b11adafc6ec1effdce0ff"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_0fe168752ce3bb4e7376d81f7ad"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_d154b3f2f34508a1112a04fc247"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "location_id"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "street"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "building_name"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "unit_no"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "address" nvarchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE "reviews"`);
        await queryRunner.query(`DROP TABLE "locality"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
