class CrudRepository{
    constructor(model){
        this.model=model
    }
    async create(data){
        try {
            const response = await this.model.create(data)
            return response
        } catch (error) {
            throw error
        }
    }
    async get(data){
        try {
            const response = await this.model.findByPk(data)
            return response
        } catch (error) {
            throw error
        }
    }
    async getAll(){
        try {
            const response = await this.model.findAll()
            return response
        } catch (error) {
            throw error
            
        }
    }
    async destroy(data,id){
        try {
            const response = await this.model.destroy(data,{
                where:{
                    id:id
                }
            });
            if(response==0){
                return new Error('something went wrong');
            }
            return response
        } catch (error) {
            throw error
            
        }
    }
    async update(data,id){
        try {
            const response = await this.model.destroy(data,{
                where:{
                    id:id
                }
            });
            if(response==0){
                return new Error('something went wrong');
            }
            return response
        } catch (error) {
            throw error
            
        }
    }

}
module.exports=CrudRepository