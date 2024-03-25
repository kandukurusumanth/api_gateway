const express = require('express');
const { usercontroller } = require('../../controller/index');
const router = express.Router();
router.post('/signup',usercontroller.createusercontroller)
router.post('/signin',usercontroller.autheciateusercontroller);

module.exports=router