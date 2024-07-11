class crudRepository{
    constructor(model){
        this.model=model;

    }

    async create(data ) {
        
        const response= await this.model.create(data)
        return response; 
       
        
    }

    async destroy(data){
        try {
            const response= await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            throw error;
            
        }
    }

    async get(data){
        try {
            const response= await this.model.findByPk({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            throw error;
            
        }
    }

    async getAll(){
        try {
            const response= await this.model.findAll();
            return response;
        } catch (error) {
            throw error;
            
        }
    }
}

module.exports = crudRepository;