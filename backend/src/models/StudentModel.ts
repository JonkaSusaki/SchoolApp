import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class Student {
    @PrimaryGeneratedColumn('increment')
        id: number

    @Column()
        name: string

    @Column()
        class: string

    @Column()
        freq: number
    
    @Column({array: true})
        mathGrade: number
    
    @Column({array: true})
        portGrade: number

    @Column({array: true})
        histGrade: number
}