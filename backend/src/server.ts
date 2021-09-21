// Fazendo a importação do express na aplicação
import express from 'express'

// Fazendo a importação do arquivo de rotas
import routes from './routes'

// Instanciando a variável que usará e express na aplicação
const app = express()

// Instanciando o uso de JSON na aplicação
app.use(express.json())

// Utilizando o arquivo de rotas
app.use(routes)

// Definindo a porta que o servidor utilizará para rodar a aplicação
app.listen(3333)