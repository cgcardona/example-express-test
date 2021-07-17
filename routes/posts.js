var express = require("express")
const router = express.Router()

router.get("/posts", async (req, res) => {
  res.send([{ winning: true }])
})


module.exports = router