import { dbContext } from "../db/DbContext"
import { logger } from "../utils/Logger"

class BurgersService {
     removeBurger(id){
        logger.log("burger id", typeof id)
        const index = dbContext.Burgers.findIndex(b => b.id.toString() === id)
        if(index === -1){
            throw new Error('no burger at that id')
        }
        dbContext.Burgers.splice(index, 1)
        return 'deleted burger'
    }
    async createBurger(body){
        const burger = await dbContext.Burgers.push(body)
        return body
    }
    async getAllBurgers(){
        const burgers = await dbContext.Burgers
        return burgers
    }
}

export const burgersService = new BurgersService()