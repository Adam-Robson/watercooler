import { client } from './client'

export async function getAllTodos() {
  const res = await client.from('todo').select('*');
  return res;
}

export async function getTodoById(id) {
  const res = await client
    .from('todo')
    .select()
    .eq('id', id)
    .single();
  return res;
}

export async function insertTodo({body, complete}) {
  const res = await client
    .from('todo')
    .insert([{ body, complete }])
    .select();
  return res;
}

export async function updateTodo(id, {body, complete}) {
  const res = await client
    .from('todo')
    .update([{body, complete}])
    .eq('id', id)
    .select();
  return res;
}

export async function deleteTodo(id) {
  const res = await client
    .from('todo')
    .delete()
    .eq('id', id)
    .select();
  return res;
}
