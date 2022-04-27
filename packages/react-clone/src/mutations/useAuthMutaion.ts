import { useMutation } from 'react-query';
import apiAuth from '../apis/auth/api.auth';

interface useCreateUserMutationData {
  userId: string;
  userPassword: string;
  userName: string;
}

const createUser = async ({ userId, userPassword, userName }: useCreateUserMutationData) => {
  const result = await apiAuth.createUser({ userId, userPassword, userName });
  return result;
};

export const useCreateUserMutation = () => {
  return useMutation<any, unknown, useCreateUserMutationData>((data: useCreateUserMutationData) => createUser(data));
};
