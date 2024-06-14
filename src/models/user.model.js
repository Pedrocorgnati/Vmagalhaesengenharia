import { atom } from 'recoil';

export const gUserState = atom({
  key: 'gUserState',
  default: {
    email: '',
    token: '',
    role: '',
  },
});
