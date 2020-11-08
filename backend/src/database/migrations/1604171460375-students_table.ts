import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class studentsTable1604171460375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {7
        await queryRunner.createTable(new Table({
            name: 'students_table',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                }, {
                    name: 'name',
                    type: 'varchar',
                }, {
                    name: 'class',
                    type: 'varchar'
                }, {
                    name: 'freq',
                    type: 'integer'
                }, {
                    name: 'mathGrade',
                    type: 'array'
                }, {
                    name: 'portGrade',
                    type: 'array'
                }, {
                    name: 'histGrade',
                    type: 'array'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
