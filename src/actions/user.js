export const SET_TOKEN = 'user/SET_TOKEN';

export function setToken(text) {
  return { type: SET_TOKEN, text }
}
