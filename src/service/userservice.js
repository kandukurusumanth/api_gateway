const {userrepo} =require('../repo/index');
const bcrypt = require('bcrypt');
const userservice = new userrepo();
const jwt = require('jsonwebtoken')
const {createjwttoken} = require('../utils/common/index')
const {verfiy} = require('../utils/common/index')
const {rolerepo} = require('../repo/index');
const roleservice = new rolerepo();
const {UserRole} = require('../models/index')
async function createuser(data){
    try {
        const user = await userservice.create(data);
        const role = await roleservice.getrole('customer');
        
       
        await user.addRoles(role)
        
        return user
    } catch (error) {
        throw error
    }

}
async function autheciate(data){
    try {
        const user= await  userservice.getuser(data);
        if(user===null){
            throw new Error('you have entered the wrong email')
        }
        if(bcrypt.compareSync(data.password,user.password)){
            let token= await createjwttoken(data);
           
            
            return isathunciated(token);
            

        }
        else {
            throw new Error('you have entered the password  wrong check once');
        }
    } catch (error) {
        throw error
        
    }
}
async function isathunciated(token){
    try {
        if(!token) throw new Error('MISSING JWT TOKEN');
        else {
            return verfiy(token)
        }
    } catch (error) {
        throw error
    }
}
async function giverole(data){
    try {
        const user = await userservice.get(data.id);
        const role = await roleservice.getrole(data.role);
        if(role==='admin') {
            if(!user) throw new Error('no user found');
            return  await user.addRoles(role)
        }
        else throw new Error ('you are not a admin');
    } catch (error) {
        throw error
    }
}
async function getuserbyid(data){
    try {
        const user = await userservice.get(data.id);
        if(!user) throw new Error ('you need to sigup');
        return user
    } catch (error) {
        throw error
    }

}
module.exports={
    createuser,
    autheciate,
    giverole,
    getuserbyid
}