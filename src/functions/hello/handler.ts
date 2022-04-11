import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

import mysql from 'mysql';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const connection = mysql.createConnection({
    host: 'serverless-api.cwxfbjetigjo.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'senha123',
    database: 'app'
  });

  const p = new Promise((resolve) => {
    connection.query('SELECT * FROM users', function (err, results){
      resolve(results);
    });
  });

  const result = await p;

  const json = JSON.stringify(result)

  return formatJSONResponse({
    message: `Hello ${event.body.name}, ${json}`,
  });
};

export const main = middyfy(hello);
