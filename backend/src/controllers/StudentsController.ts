import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import Student from '../models/StudentModel'

export default {
    async save (req: Request, res: Response) {
        const data = req.body

        const studentRepo = getRepository(Student)
        
        const student = studentRepo.create(data)
        await studentRepo.save(student)

        res.json(student)
    },

    async get (req: Request, res: Response) {
        const studentRepo = getRepository(Student)
        const students = await studentRepo.find()

        const data = students.map(student => {
            return {id: student.id, name: student.name, class: student.class}
        })

        res.json(data)
    },

    async getById (req: Request, res: Response) {
        const id = parseInt(req.params.id)

        const studentRepo = getRepository(Student)
        const student = await studentRepo.findOne(id)

        res.json(student)
    },

    async alter (req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const data = req.body

        const studentRepo = getRepository(Student)
        await studentRepo.update({id}, data)

        res.send('Aluno alterado com Sucesso!')
    },

    async delete (req: Request, res: Response) {
        const id = parseInt(req.params.id)

        const studentRepo = getRepository(Student)
        const student = await studentRepo.findOne(id)

        await studentRepo.delete(student)

    }
}