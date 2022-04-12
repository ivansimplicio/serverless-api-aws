import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { deleteOne } from './../../services/user-service';

const deleteOneUser = async (event) => {
  const id = event.pathParameters.id;
  const user = await deleteOne(id);
  return formatJSONResponse({ user });
};

export const main = middyfy(deleteOneUser);
