import { Router } from 'express'
import { skills } from '../data/skills_data.js'

const router = Router()

// GET localhost:3000/users
router.get('/', function (req, res) {
  res.render("skills/index", { skills: skills })
})

export { router }
