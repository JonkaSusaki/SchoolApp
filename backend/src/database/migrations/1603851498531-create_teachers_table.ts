import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTeachersTable1603851498531 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'teachers_table',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                }, {
                    name: 'name',
                    type: 'varchar'
                }, {
                    name: 'subject',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('teachers_table')
    }

}
