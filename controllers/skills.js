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

export { index }