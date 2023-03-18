import { post } from '@/util/http';

export function login(loginInfo) {
  return post('/account/login', loginInfo);
}

export function isLogin(stateKey) {
  return post('/account/isLogin', stateKey);
}

export function logout(stateKey) {
  return post('/account/logout', stateKey);
}

export function postpone(stateKey) {
  return post('/account/postpone', stateKey);
}

export function updatePassword(passwordUpdateInfo) {
  return post('/account/update-password', passwordUpdateInfo);
}
