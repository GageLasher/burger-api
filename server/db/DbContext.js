import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Burgers = [{id: 2, name: "cheeseburger", price: 3}, {id: 3, name: "hamburger", price: 2}]
}

export const dbContext = new DbContext()
