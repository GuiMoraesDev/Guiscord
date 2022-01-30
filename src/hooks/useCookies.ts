import nookies from 'nookies';

interface IUseCookiesDTO {
  getItem: (key: string) => string;
  removeItem: (key: string) => void;
  setItem: (key: string, value: string) => void;
}

const useCookies = (): IUseCookiesDTO | null => {
  const prefix = process.env.NEXT_PUBLIC_PROJECT_PREFIX || '';

  const getItem = (key: string) => {
    const item = nookies.get(null, `${prefix}:${key}`);

    const response = item[`${prefix}:${key}`];
    return response;
  };

  const setItem = (key: string, value: string) => {
    return nookies.set(null, `${prefix}:${key}`, value, {
      maxAge: 2 * 24 * 60 * 60, // 2 days
      path: '/',
    });
  };

  const removeItem = (key: string) => {
    const removePrefixIfExists = key.replace(`${prefix}:`, '');

    return nookies.destroy(null, `${prefix}:${removePrefixIfExists}`);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useCookies;
