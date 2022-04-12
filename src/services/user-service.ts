import { mysql } from 'src/config/database';

import { User } from './../model/user';

export const findAll = async () => {
  const results: User[] = await mysql.query('SELECT * FROM users');
  return results;
}

export const findOne = async (id: string) => {
  const result: User = await mysql.query(`SELECT * FROM users WHERE id = ${id}`);
  return result[0];
}

export const insert = async (name: string, cpf: string, email: string, password: string) => {
  const result = await mysql.query('INSERT INTO users VALUES (default, ?, ?, ?, ?, default, default)', [name, cpf, email, password])
  return result;
}

export const update = async (data: any, id: string) => {
  const result = await mysql.query(buildQuery(data, id));
  return result;
}

export const deleteOne = async (id: string) => {
  const result = await mysql.query(`DELETE FROM users WHERE id = ${id}`);
  return result;
}

const buildQuery = (entries: any, id: string) => {
  let query = 'UPDATE users SET ';
  entries.forEach((elem: string[], index: number, array: string[][]) => {
    query += `${elem[0]} = '${elem[1]}'`;
    query += (index === array.length-1) ? ' ' : ', ';
  });
  query += `WHERE id = ${id}`;
  return query;
}