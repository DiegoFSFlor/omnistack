const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Método Http 
 * 
 * Get: Buscar/listar uma informação do back-end
 * Post: Criar informação do back-end
 * Put: Altera informação do back-end
 * Delete: Deleta informação do back-end
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após ?(Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySql, SqLite, PostrgreSql, Oracle, Micrsoft Sql Server
   * NoSql: MongoDb, CouchDb, etc
   */

   /**
    * Driver: Select * from users
    * Query Builder: table('users').select('*').where( )
    */
module.exports = app;