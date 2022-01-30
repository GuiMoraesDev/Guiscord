import React from 'react';

import axios from 'axios';

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
  const [data, setData] = React.useState<UserDTO | null>(null);

  const setUser = React.useCallback(
    async ({ username }): Promise<() => void> => {
      const getUserCancelToken = axios.CancelToken.source();

      const response = await getUser({ username }, getUserCancelToken.token);

      setData(response.data);

      return () => getUserCancelToken.cancel('axios request cancelled');
    },
    []
  );

  const clearUser = React.useCallback(() => {
    setData(null);
  }, []);

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
