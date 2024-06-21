//src/models/user.model.ts
//'''
import { atom } from 'recoil';
import { UserState } from 'types/types';



export const gUserState = atom<UserState>({
  key: 'gUserState',
  default: {
    email: '',
    token: '',
    role: '',
  },
});

//'''