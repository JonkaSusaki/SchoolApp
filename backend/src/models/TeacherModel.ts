import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('teachers')
export class Teacher {
    @PrimaryGeneratedColumn('increment')
        id: number

    @Column()
        name: string

    @Column()
        subject: string
}