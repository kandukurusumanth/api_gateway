const jwt = require('jsonwebtoken')
const {server} = require('../../config/index');
// const { data } = require('./success_response');
async function token(data1){
    try {
        
        const token = await jwt.sign({data:data1},server.SECERT_KEY)
        
        return token
    } catch (error) {
        throw error
    }
}
module.exports=token