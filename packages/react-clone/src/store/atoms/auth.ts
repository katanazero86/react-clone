import { atom } from 'recoil';

interface User {
  me: {
    userName: string;
    userId: string;
  };
  token: string;
}

export const auth = atom<User>({
  key: 'auth',
  default: JSON.parse(localStorage.getItem('user') ?? '{}'),
});
