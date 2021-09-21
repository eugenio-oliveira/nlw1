import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController{
  async create(request: Request, response: Response){
  
    const { 
      name, 
      email, 
      whatsapp, 
      longitude, 
      latitude, 
      city, 
      uf, 
      items 
    } = request.body
    
  
    //const trx = knex.transaction()

    const point = {
      image: 'image-fake',
      name, 
      email, 
      whatsapp, 
      longitude, 
      latitude, 
      city, 
      uf 
     }
  
    const insertedIds = await knex('points').insert(point)
  
     const point_id = insertedIds[0]
  
     const pointItems = items.map((item_id: Number) => {
       return {
         point_id,
         item_id
       }
     })
  
     await knex('point_items').insert(pointItems)
  
     return response.json({
       id: point_id,
       ...point
     })
  
  }
}

export default PointsController