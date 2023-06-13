/* eslint-disable no-param-reassign */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { getUserId } from '../shared';

type AuthStoreType = {
  accessToken: Promise<string | null>;
  currentUser: CurrentUser | null;
  getUserInfoStatus: 'error' | 'initial' | 'loading' | 'success';
  loginRequestStatus: 'error' | 'initial' | 'loading' | 'success';
  userId: Promise<string | null>;
};

type AuthActionsType = {
  getUserInfo: (accessToken: string) => void;
  login: (accessToken: string, userId: string) => void;
  loginRequest: (email: string, password: string) => Promise<void>;
  logout: () => void;
  resetLoginRequestStatus: () => void;
  setUserData: (currentUser: CurrentUser) => void;
};

type LoginType = {
  accessToken: string;
};

type CurrentUser = {
  birthDate: string;
  birthPlace: string;
  email: string;
  firstName: string;
  id: string;
  isActive: boolean;
  lastName: string;
  login: string;
  male: boolean;
  middleName?: string;
  phoneNumber: string;
  snils: string;
};

export const useAuthStore = create<AuthActionsType & AuthStoreType>()(
  immer((set) => ({
    accessToken: AsyncStorage.getItem('accessToken') || null,
    memory: false,
    userId: AsyncStorage.getItem('userId') || null,
    loginRequestStatus: 'initial',
    currentUser: null,
    getUserInfoStatus: 'initial',
    // синхронные экшены
    login: (accessToken, userId) => {
      set((state) => ({
        ...state,
        accessToken,
        userId,
      }));
    },
    logout: () => {
      set(() => ({ accessToken: '' }));
      set(() => ({ currentUser: null }));
    },
    resetLoginRequestStatus: () => {
      set((state) => ({ ...state, loginRequestStatus: 'initial' }));
    },
    setUserData: (currentUser) => {
      set((state) => {
        // eslint-disable-next-line no-param-reassign
        state.currentUser = currentUser
      });
    },
    // асинхронные экшены
    loginRequest: async (email: string, password: string) => {
      set((state) => {
        state.loginRequestStatus = 'loading';
      });
      try {
        const response = await axios.post<LoginType>(
          'http://localhost:5000/api/v1/auth/signin',
          {
            loginOrEmail: email,
            password,
          },
          {
            withCredentials: true,
          },
        );

        set((state) => {
          state.loginRequestStatus = 'success';
        });

        const { accessToken } = response.data;
        AsyncStorage.setItem('accessToken', accessToken);

        set((state) => {
          state.getUserInfo(accessToken)
        });
      } catch (error) {
        set((state) => {
          state.loginRequestStatus = 'error'});
      }
    },
    getUserInfo: async (accessToken: string) => {
      try {
        set((state) => {
          state.getUserInfoStatus = 'loading'});
        const userId = getUserId(accessToken);
        const response = await axios.get(`http://localhost:5001/api/v1/internal/users/${ userId }`);
        const currentUser = response.data;
        set((state: AuthStoreType) => {
          state.currentUser = currentUser 
        });
        set((state) => {
          state.getUserInfoStatus = 'success'});
      } catch (error) {
        set((state) => {
          state.getUserInfoStatus = 'error'});
        }
      }
    })),
);
