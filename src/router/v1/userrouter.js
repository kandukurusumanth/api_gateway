const express = require('express');
const { usercontroller } = require('../../controller/index');
const router = express.Router();
router.post('/',usercontroller.createusercontroller)
router.get('/',usercontroller.autheciateusercontroller)
module.exports=router