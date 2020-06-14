import { Service } from 'typedi';

@Service()
export class LocalStorageManager {
  constructor() {
    this.authLocalStorage = '@authLS';
  }

  private authLocalStorage;

  saveUser = (user: string) => {
    window.localStorage.setItem(this.authLocalStorage, user);
  };

  removeUser = () => {
    window.localStorage.setItem(this.authLocalStorage, '');
  };

  getUser = () => {
    return window.localStorage.getItem(this.authLocalStorage);
  };
}
