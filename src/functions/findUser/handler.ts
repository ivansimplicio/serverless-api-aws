import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { findOne } from '../../services/user-service';

const findOneUser = async (event) => {
  const id = event.pathParameters.id;
  const user = await findOne(id);
  if(user){
    return formatJSONResponse(200, { user });
  }
  return { statusCode: 404 };
};

export const main = middyfy(findOneUser);
