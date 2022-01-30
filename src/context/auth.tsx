import React from 'react';

import axios from 'axios';

import useCookies from 'hooks/useCookies';

import { getUser, ISignInDTO, UserDTO } from 'services/github/api.users';

interface IAuthContextData {
  user: UserDTO | null;
  setUser({ username }: ISignInDTO): Promise<() => void>;
  clearUser(): void;
}

const AuthContext = React.createContext<IAuthContextData>(
  {} as IAuthContextData
);

const AuthProvider: React.FC = ({ children }) => {
  const cookies = useCookies();

  const [data, setData] = React.useState<UserDTO | null>(() => {
    const user = cookies?.getItem('User');

    if (user) {
      const parsedUser: UserDTO = JSON.parse(user);

      return {
        ...parsedUser,
      };
    }

    return null;
  });

  const setUser = React.useCallback(
    async ({ username }): Promise<() => void> => {
      const getUserCancelToken = axios.CancelToken.source();

      const response = await getUser({ username }, getUserCancelToken.token);

      cookies?.setItem('User', JSON.stringify(response.data));

      setData(response.data);

      return () => getUserCancelToken.cancel('axios request cancelled');
    },
    [cookies]
  );

  const clearUser = React.useCallback(() => {
    setData(null);

    cookies?.removeItem('User');
  }, [cookies]);

  return (
    <AuthContext.Provider
      value={{
        user: data,
        setUser,
        clearUser,
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
