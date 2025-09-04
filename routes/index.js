const express = require("express");
const router = express.Router();

router.use("/", require("./blog.routes"));
router.use("/", require("./user.routes"));
module.exports = router;
