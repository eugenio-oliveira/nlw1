import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController{

  async show(request: Request, response: Response){
    const { id } = request.params

    const point = await knex('points').where('id', id).first()

    if(!point){
      return response.status(400).json({ error : "Point not found."})
    }

    const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.id', id)

    return response.json({point, items})


  }
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