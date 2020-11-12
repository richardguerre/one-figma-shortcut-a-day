import config from 'config';

export const useStorage = () => {
  const prefix = config.name + '-';

  const get = (key: string) => {
    return new Promise<any>(resolve => {
      chrome.storage.local.get([prefix + key], result => {
        resolve(result[prefix + key]);
      });
    });
  };

  const set = (key: string, value: any) => {
    return new Promise(resolve => {
      chrome.storage.local.set({ [prefix + key]: value }, () => {
        resolve();
      });
    });
  };

  return { get, set };
};
