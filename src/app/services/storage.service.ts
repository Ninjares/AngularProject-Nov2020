import { Provider, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

interface IStorage {
  setItem<T>(key: string, item: T): T;
  getItem<T>(key: string): T;
  removeItem(key: string): void;
}

export class StorageService implements IStorage{
  localStorage = localStorage;
  setItem<T>(key:string, item:T):T{
    const str = typeof item === 'string' ? item : JSON.stringify(item);
    this.localStorage.setItem(key, str);
    return item;
  }
  getItem<T>(key:string):T{
    let item;
    const tmp = this.localStorage.getItem(key);
    if (!tmp) { return null; }
    try {
      item = JSON.parse(tmp);
    } catch {
      item = tmp;
    }
    return item;
  }
  removeItem(key:string):void{
    this.localStorage.removeItem(key);
  }
  
}