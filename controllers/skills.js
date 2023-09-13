import { Skill } from "../models/skill.js"


function index(req, res) {
  Skill.find({})
    .then(skills => {
      res.render("skills/index", { skills: skills })
    })
    .catch(err => {
      console.log(err);
      res.redirect("/")
    })
}

function newSkill(req, res) {
  res.render("skills/new")
}

function create(req, res) {
  req.body.learning = true
  Skill.create(req.body)
    .then(skill => {
      res.redirect("/skills")
    })
}

function show(req, res) {
  Skill.findById(req.params.skillId).then(skill => {
    res.render("skills/show", { skill: skill })
  }).catch(err => {
    console.log(err);
    res.redirect("/skills")
  })
}

export { index, newSkill as new, create, show }