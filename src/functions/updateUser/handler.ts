import { notFound, badRequest } from './../../libs/helper';
import { update } from './../../services/user-service';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const updateOne = async (event) => {
  const id = event.pathParameters.id;
  const entries = Object.entries(event.body);
  if(entries.length === 0){
    return formatJSONResponse(400, badRequest());
  }
  const user = await update(entries, id);
  if(user){
    return formatJSONResponse(200, { user });
  }
  return formatJSONResponse(404, notFound());;
};

export const main = middyfy(updateOne);
