import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'


const router = Router()

// GET localhost:3000/users
router.get('/', skillsCtrl.index)
router.get('/add-new-skill', skillsCtrl.new)
router.post('/', skillsCtrl.create)

router.get('/:skillId', skillsCtrl.show)

export { router }
