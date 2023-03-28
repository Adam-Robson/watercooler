import { client } from './client';

export async function currentUser() {
  return await client.auth.getUser();
}

export async function authUser(email, password, type) {
  let res;
  type === 'sign-up' ?
    res = await client.auth.signUp({ email, password }) :
    res = await client.auth.signInWithPassword({ email, password });
  return res;
}

export async function signOutUser() {
  return await client.auth.signOut();
}
