import { client } from './client';

export async function getUser() {
  return await client.auth.currentUser;
}

export async function authUser(email, password, type) {
  let res;
  type === 'sign-up' ?
    res = await client.auth.signUp({ email, password }) :
    res = await client.auth.signIn({ email, password });
  return res;
}

export async function signOutUser() {
  return await client.auth.signOut();
}
