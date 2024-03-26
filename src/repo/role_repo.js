const CrudRepository = require('./crudrepo');
const {Role} = require('../models/index')
class rolerepo extends CrudRepository{
    constructor(){
        super(Role)

    }
    async getrole(data){
        try {
            const user = await Role.findOne({where:{
                name:data
            }})
            return user
        } catch (error) {
            throw error
        }
    }
}
module.exports=rolerepo