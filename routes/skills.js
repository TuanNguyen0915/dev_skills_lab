import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'


const router = Router()

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)
router.get('/add-new-skill', skillsCtrl.new)
router.post('/', skillsCtrl.create)
router.get('/:skillId', skillsCtrl.show)
router.delete('/:skillId', skillsCtrl.delete)
router.get('/:skillId/edit', skillsCtrl.edit)
router.put('/:skillId', skillsCtrl.update)
export { router }
