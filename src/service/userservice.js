const {userrepo} =require('../repo/index');
const bcrypt = require('bcrypt');
const userservice = new userrepo();
const jwt = require('jsonwebtoken')
const {createjwttoken} = require('../utils/common/index')
console.log(createjwttoken);
async function createuser(data){
    try {
        const user = await userservice.create(data)
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
            return createjwttoken(user.email);
        }
        else {
            throw new Error('you have entered the password  wrong check once');
        }
    } catch (error) {
        throw error
        
    }
}

module.exports={
    createuser,
    autheciate
}