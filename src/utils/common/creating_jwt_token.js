const jwt = require('jsonwebtoken')
async function token(user_email){
    try {
        const token = await jwt.sign({email:user_email},'12')
        console.log(token);
        return token
    } catch (error) {
        throw error
    }
}
module.exports=token