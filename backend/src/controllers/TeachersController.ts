import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import {Teacher} from '../models/TeacherModel'

export default {
    async save (req: Request, res: Response) {
        const {name, subject} = req.body

        const teacherRepo = getRepository(Teacher)

        const teacher = teacherRepo.create({name, subject})
        await teacherRepo.save(teacher)

        res.json(teacher)
    },

    async get (req: Request, res: Response) {
        const teacherRepo = getRepository(Teacher)
        const teachers = await teacherRepo.find()

        res.json(teachers)
    },

    async getById (req: Request, res: Response) {
        const id = parseInt(req.params.id)
        const teacherRepo = getRepository(Teacher)
        const teacher = await teacherRepo.findOne({id})

        res.json(teacher)
    },

    async alter (req: Request, res: Response) {
        const {name, subject} = req.body
        const id = parseInt(req.params.id)

        const teacherRepo = getRepository(Teacher)
        await teacherRepo.update({id}, {name, subject})
    
        res.send('Professor Alterado!')
    },

    async delete (req: Request, res: Response) {
        const id = parseInt(req.params.id)

        const teacherRepo = getRepository(Teacher)
        const teacher = await teacherRepo.findOne({id})

        await teacherRepo.delete(teacher)

        res.send("Professor Excluído!")
    }

    
}