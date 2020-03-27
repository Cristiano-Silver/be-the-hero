const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 *  Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Busca uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma infomação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtro, paginação)
   * Route Params: Paramêtros ultilizados para indentificar recursos
   * Request Body: Corpo da requisição, ultilizado para criar ou alterar recursos
   */

   /**
    * SQL: Mysql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc...
    */

/*app.post('/users', (request, response) => {
  //return response.send('Hello World');
  const body = request.body;

  console.log(body);


  return response.json({
      evento: 'Semana OmniStack 11.0',
      aluno: 'Cristiano Silva'
   });
});
*/
app.listen(3333);