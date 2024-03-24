const express = require('express');
const router = express.Router();
const {info} = require('../../controller/index');
router.get('/',info.check)
module.exports=router