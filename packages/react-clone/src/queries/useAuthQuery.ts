import { useQuery, useMutation } from 'react-query';
import apiAuth from '../apis/auth/api.auth';

interface useLoginQueryData {
  userId: string;
  userPassword: string;
}

const requestLogin = async ({ userId, userPassword }: useLoginQueryData) => {
  const result = await apiAuth.requestLogin({ userId, userPassword });
  return result;
};

export const useLoginQuery = (data: useLoginQueryData) => {
  return useQuery<any>('login', () => requestLogin(data), {
    enabled: false,
  });
};

interface useLogoutQueryData {
  userId: string;
}

const requestLogout = async ({ userId }: useLogoutQueryData) => {
  const result = await apiAuth.requestLogout({ userId });
};

export const useLogoutQuery = (data: useLogoutQueryData) => {
  return useQuery('logout', () => requestLogout(data), {
    enabled: false,
  });
};

interface useCreateUserMutationData {
  userId: string;
  userPassword: string;
  userName: string;
}

const createUser = async ({userId, userPassword, userName}:useCreateUserMutationData) => {
  const result = await apiAuth.createUser({userId, userPassword, userName});
};

export const useCreateUserMutation = async ({userId, userPassword, userName} : useCreateUserMutationData) {
  return useMutation('createUser');
}
