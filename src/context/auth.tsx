import { useRouter } from 'next/router';

import React from 'react';

import axios from 'axios';

import { getUser, ISignInDTO, UserDTO } from 'services/github/api.users';

interface IAuthContextData {
  user: UserDTO | null;
  signIn({ username }: ISignInDTO): Promise<() => void>;
  signOut(): void;
}

const AuthContext = React.createContext<IAuthContextData>(
  {} as IAuthContextData
);

const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const [data, setData] = React.useState<UserDTO | null>(null);

  const signIn = React.useCallback(
    async ({ username }): Promise<() => void> => {
      const getUserCancelToken = axios.CancelToken.source();

      const response = await getUser({ username }, getUserCancelToken.token);

      setData(response.data);

      return () => getUserCancelToken.cancel('axios request cancelled');
    },
    []
  );

  const signOut = React.useCallback(() => {
    setData(null);
    router.push('/');
  }, [router]);

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('DEV Alert: useAuth must be used whithin a AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
