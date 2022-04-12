import { update } from './../../services/user-service';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const updateOne = async (event) => {
  const id = event.pathParameters.id;
  const entries = Object.entries(event.body);
  if(entries.length === 0){
    return formatJSONResponse(400, { message: 'empty request body' });
  }
  const user = await update(entries, id);
  if(user){
    return formatJSONResponse(200, { user });
  }
  return { statusCode: 404 };
};

export const main = middyfy(updateOne);
