const {userrepo} =require('../repo/index');
const bcrypt = require('bcrypt');
const userservice = new userrepo();
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
            return user
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