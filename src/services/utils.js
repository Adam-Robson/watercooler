import { checkError, client } from './client';

export async function getTodos() {
  const res = await client.from('todos').select('*');
  return checkError(res);
}

export async function getTodoById(id) {
  const res = await client.from('todos').select('*').where({ id }).single();
  return checkError(res);
}

export async function createTodo(todo) {
  const res = await client.from('todos').insert(todo);
  return checkError(res);
}

export async function updateTodo(id, text) {
  const res = await client.from('todos').update({ text }).match({ id });
  return checkError(res);
}

export async function deleteTodo(id) {
  const res = await client.from('todos').delete().match({ id }).single();
  return checkError(res);
}
