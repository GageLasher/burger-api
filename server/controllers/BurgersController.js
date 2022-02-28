import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";

export class BurgersController extends BaseController{
    constructor(){
        super('api/burgers')
        this.router
        .get('', this.getAllBurgers)
        .post('', this.createBurger)
        .delete('/:id', this.removeBurger)
        

    }
    async getAllBurgers(req, res, next){
        try {
            const burgers = await burgersService.getAllBurgers()
            return res.send(burgers)
        } catch (error) {
            next(error)
        }
    }
    async createBurger(req, res, next) {
        try {
            const burger = await burgersService.createBurger(req.body)
            return res.send(burger)
        } catch (error) {
            next(error)
        }
    }
    async removeBurger(req, res, next){
        try {
            logger.log(req.params.id)
            const message = await burgersService.removeBurger(req.params.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}