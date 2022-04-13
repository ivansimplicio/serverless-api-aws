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

export const insert = async (...data: string[]) => {
  const result = await mysql.query('INSERT INTO users VALUES (default, ?, ?, ?, ?, default, default)', data);
  return findOne(result.insertId);
}

export const update = async (entries: any, id: string) => {
  const result = await mysql.query(buildQuery(entries, id));
  if(result.affectedRows !== 0){
    return findOne(id);
  }
  return null;
}

export const deleteOne = async (id: string) => {
  const result = await mysql.query(`DELETE FROM users WHERE id = ${id}`);
  return result.affectedRows !== 0;
}

const buildQuery = (entries: any, id: string) => {
  let query = 'UPDATE users SET updated_at = now(), ';
  entries.forEach((elem: string[], index: number, array: string[][]) => {
    query += `${elem[0]} = '${elem[1]}'`;
    query += (index === array.length-1) ? ' ' : ', ';
  });
  query += `WHERE id = ${id}`;
  return query;
}