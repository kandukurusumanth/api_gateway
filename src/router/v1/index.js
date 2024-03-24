const express = require('express');
const router = express.Router();
const info = require('./inforouter');
const user = require('./userrouter');
router.use('/info',info)
router.use('/signup',user)
module.exports=router