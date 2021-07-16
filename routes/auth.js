const router = require("express").Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {
  const user = await new User({
    username:"lulu",
    email:"lulu.app@gmail.com",
    password:"jordi32"
  })

  await user.save();
  res.send("ok")
})

module.exports = router;