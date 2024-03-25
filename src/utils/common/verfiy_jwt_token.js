const jwt  = require('jsonwebtoken');
const { server } = require('../../config/index');
async function verify(token){
    try {
        const response=
            await jwt.verify(token, server.SECERT_KEY, function(err, decoded) {
                if(err){
                    throw err
                }
                else {
                   
                    return decoded
                   
                }
            });
        return response
    } catch (error) {
        throw error
    }
}
module.exports=verify