// Fazendo a importação do express na aplicação
import express from 'express'

// Instanciando a variável que usará e express na aplicação
const app = express()

// instanciando o uso de JSON na aplicação
app.use(express.json())


// Definindo um array de usuários
const users = [
  'Eugênio',
  'Pollyana',
  'Nícolas'
]


// Rota GET
app.get('/users', (request, response) => {
  const search = String(request.query.search)
  const filteredUsers = search ? users.filter(user => user.includes(search)) : users
  return response.json(filteredUsers)
})

// Rota GET Com Passagem de Parâmetros
app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id)
  const user = users[id]
  return response.json(user)
})


// Rota POST
app.post('/users', (request, response) => {

  const data = request.body

  console.log(data)
  const user = {
    name: data.name,
    email: data.email
  }
  return response.json(user)
})

// Definindo a porta que o servidor utilizará para rodar a aplicação
app.listen(3333)