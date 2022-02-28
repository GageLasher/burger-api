import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";

export class BurgersController extends BaseController{
    constructor(){
        super('api/burgers')
        this.router
        .get('', this.getAllBurgers)

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
            const message = await burgersService.removeBurger(req.params.burgerId)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}