import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { findAll } from '../../services/user-service';

const findAllUsers = async () => {
  const users = await findAll();
  return formatJSONResponse(200, { users });
};

export const main = middyfy(findAllUsers);
