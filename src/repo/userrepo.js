const CrudRepository = require('./crudrepo');
const {User} = require('../models/index')
class userrepo extends CrudRepository{
    constructor(){
        super(User)

    }
    async getuser(data){
        try {
            const user = await User.findOne({where:{
                email:data.email
            }})
            return user
        } catch (error) {
            throw error
        }
    }
}
module.exports=userrepo