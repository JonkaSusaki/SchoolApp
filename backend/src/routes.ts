import {Router, Request, Response} from 'express'
import TeachersController from './controllers/TeachersController'
import StudentsController from './controllers/StudentsController'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    res.send('Hello Babi!')
})

routes.post('/teachers', TeachersController.save)
routes.get('/teachers', TeachersController.get)
routes.get('/teachers/:id', TeachersController.getById)
routes.put('/teachers/:id', TeachersController.alter)
routes.delete('/teachers/:id', TeachersController.delete)

routes.get('/students', StudentsController.get)
routes.post('/students', StudentsController.save)
routes.get('/students/:id', StudentsController.getById)
routes.put('/students/:id', StudentsController.alter)
routes.delete('/students/:id', StudentsController.delete)

export default routes