const express = require('express');
const { usercontroller } = require('../../controller/index');
const router = express.Router();
router.post('/signup',usercontroller.createusercontroller)
router.get('/signin',usercontroller.autheciateusercontroller)
module.exports=router