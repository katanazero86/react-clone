import { atom } from 'recoil';

interface User {
  me: {
    name: string;
    id: string;
  };
  token: string;
}

export const auth = atom<User>({
  key: 'auth',
  default: JSON.parse(localStorage.getItem('user') ?? '{}'),
});
