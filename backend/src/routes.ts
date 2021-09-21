import express from 'express'

const routes = express.Router()

// Rota GET
routes.get('/', (request, response) => {
  return response.json({message: "Hello World!"})
})



export default routes