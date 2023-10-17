import { AUTHENTICATOR_APP_NAME } from '@match-mate-api/nest-utils';
import * as admin from 'firebase-admin';
import { getApp } from 'firebase-admin/app';
import {
  Auth,
  getIdTokenResult,
  signInWithEmailAndPassword,
} from 'firebase/auth';

type UserData = {
  email?: string;
  password?: string;
  displayName?: string;
  uid?: string;
};

export async function loginUser(auth: Auth, userData?: UserData) {
  const authenticatorApp = getApp(AUTHENTICATOR_APP_NAME);
  const randomId = Math.random().toString().substring(2, 5);
  const fullUserData = {
    uid: `userId${randomId}`,
    displayName: `test user${randomId}`,
    email: `test-user+${randomId}@panenco.com`,
    password: `Panenco${randomId}`,
    emailVerified: true,
    ...userData,
  };
  const userInitialization = await admin
    .auth(authenticatorApp)
    .createUser(fullUserData);
  const { user } = await signInWithEmailAndPassword(
    auth,
    userInitialization.email,
    fullUserData.password
  );
  const { token } = await getIdTokenResult(user);
  return { token, user: fullUserData };
}
