import { update } from './../../services/user-service';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const updateOne: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const id = event.pathParameters.id;
  const entries = Object.entries(event.body)
  const result = await update(entries, id);
  return formatJSONResponse({ result });
};

export const main = middyfy(updateOne);
