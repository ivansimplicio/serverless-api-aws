import { insert } from './../../services/user-service';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const insertUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { name, cpf, email, password } = event.body;
  await insert(name, cpf, email, password);
  return formatJSONResponse({ name, cpf, email, password });
};

export const main = middyfy(insertUser);
