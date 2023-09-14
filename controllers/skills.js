import { Skill } from "../models/skill.js"


function index(req, res) {
  Skill.find({})
    .then(skills => {
      res.render("skills/index", { skills: skills, time: req.time })
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

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.skillId)
    .then(skill => res.redirect('/skills'))
    .catch(err => {
      console.log(err);
      res.redirect("/skills")
    })
}

function edit(req, res) {
  Skill.findById(req.params.skillId)
    .then(skill => res.render("skills/edit", { skill: skill }))
    .catch(err => {
      console.log(err);
      res.redirect("/skills")
    })
}

function update(req, res) {
  req.body.learning = !!req.body.learning
  Skill.findByIdAndUpdate(req.params.skillId, req.body, { new: true })
    .then(skill => res.redirect(`/skills/${skill._id}`))
    .catch(err => {
      console.log(err);
      res.redirect("/skills")
    })
}

export { index, newSkill as new, create, show, deleteSkill as delete, edit, update }