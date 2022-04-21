import { notFound } from './../../libs/helper';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { deleteOne } from './../../services/user-service';

const deleteOneUser = async (event) => {
  const id = event.pathParameters.id;
  const user = await deleteOne(id);
  if(user){
    return { statusCode: 204 };
  }
  return formatJSONResponse(404, notFound());
};

export const main = middyfy(deleteOneUser);
