const e = require('express')
const {userservice}= require('../service/index')
const {success} = require('../utils/common/index')
const {errors}= require('../utils/common/index')
async function createusercontroller(req,res){
    try {
        const user = await userservice.createuser({
            email:req.body.email,
            password:req.body.password
        })
        success.data=user
        return res.json({
            success
        })
    } catch (error) {
        
        res.json({
            error
        })
        throw error
        
    }
}
async function autheciateusercontroller(req,res){
    try {
        const user = await userservice.autheciate({
            email:req.body.email,
            password:req.body.password
        })
        success.data=user
        return res.json({
            success
        })
    } catch (error) {
        errors.error=error.message;
        res.json({
            errors
        })
        throw error
    }
}
module.exports={
    createusercontroller,
    autheciateusercontroller
}