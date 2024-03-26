const e = require('express')
const {userservice}= require('../service/index')
const {success} = require('../utils/common/index')
const {errors}= require('../utils/common/index')
const jwt = require('jsonwebtoken');
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
        console.log(error);
        return  res.json({
            errors
        })
       
        throw error
    }
}
async function giverolecontoller(req,res){
    
    try {
        const user = await userservice.giverole({
            role:req.body.role,
            id:req.body.id
        })
        
        success.data=user
        return res.json({
            success
        })
    } catch (error) {
        errors.error=error.message;
        console.log(error);
        return  res.json({
            errors
        })
       
        throw error
    }
}
async function getusercontrollerbyid(req,res){
    try {
        const user = await userservice.getuserbyid({
            id:req.params.id
        })
        return res.json({
            data:user
        })
    } catch (error) {
        console.log(error);
        return res.json({
            error
        })
        
    }

}
module.exports={
    createusercontroller,
    autheciateusercontroller,
    giverolecontoller,
    getusercontrollerbyid
}