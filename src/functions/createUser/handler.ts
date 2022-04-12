import { insert } from './../../services/user-service';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const insertUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { name, cpf, email, password } = event.body;
  const user = await insert(name, cpf, email, password);
  return formatJSONResponse(201, { user });
};

export const main = middyfy(insertUser);
