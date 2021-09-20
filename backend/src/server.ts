import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  //console.log('listagem de usuários.')
  return response.json({"message" : "listagem de usuários"})
})

app.listen(3333)