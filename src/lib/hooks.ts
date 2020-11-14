import config from 'config';

export const useStorage = () => {
  const prefix = config.name + '-';

  const get = (key: string) => {
    return window.localStorage.getItem(prefix + key);
  };

  const set = (key: string, value: string) => {
    return window.localStorage.setItem(prefix + key, value);
  };

  return { get, set };
};
