export enum LocalStorageKey {
  Token = 'asd',
}

export const setToken = (token: string): void => {
  localStorage.setItem(LocalStorageKey.Token, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(LocalStorageKey.Token);
};

export const deleteToken = (): void => {
  localStorage.removeItem(LocalStorageKey.Token);
};
